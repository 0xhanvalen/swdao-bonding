import { useWallet } from '@raidguild/quiver';
import { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import createContract from '../../../utils/contractMaker';
import ConnectionIndicator from '../../atoms/ConnectionIndicator/ConnectionIndicator';
import DepositButton from '../../atoms/LiquidityMining/DepositButton';
import WithdrawButton from '../../atoms/LiquidityMining/WithdrawButton';
import styles from './BondingCard.module.scss';
import { SWDABI } from './SWDABI';
import { ethers } from '@setprotocol/set-protocol-v2/node_modules/ethers';
import toast from 'react-hot-toast';

const BondingCard: any = (props: any) => {
	const [cardState, setCardState] = useState<string>('');
	const [contract, setContract] = useState<any>();
	const [swxContract, setSWXContract] = useState<any>();
	const [heldSWD, setHeldSWD] = useState<any>();
	const [heldSWX, setHeldSWX] = useState<any>();
	const [displaySWX, setDisplaySWX] = useState<any>();
	const [withdrawAmount, setWithdrawAmount] = useState<any>();
	const [displayWithdrawAmount, setDisplayWithdrawAmount] = useState<any>();
	const [amountToDeposit, setAmountToDeposit] = useState<any>('');
	const [isDepositModalOpen, setIsDepositModalOpen] = useState<boolean>(false);
	const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState<boolean>(false);
	const SWDAddress = '0x24Ec3C300Ff53b96937c39b686844dB9E471421e';
	const contractData = props?.contract;
	console.log('address: ', contractData?.contract_address);
	const { isConnected, provider, chainId, address } = useWallet();

	async function getContract() {
		if (isConnected && provider && chainId && contractData) {
			const signer = provider.getSigner();
			const tempABI = await JSON.parse(contractData.ABI.ABI);
			let tempContract = await createContract(
				tempABI,
				contractData.contract_address,
				provider,
				signer,
			);
			setContract({ read: tempContract.read, write: tempContract.write });
			tempContract = await createContract(SWDABI, SWDAddress, provider, signer);
			setSWXContract({ read: tempContract.read, write: tempContract.write });
		}
	}

	useEffect(() => {
		getContract();
	}, [isConnected, provider, chainId]);

	async function getSWXBalance() {
		const temp = await swxContract?.read?.balanceOf(address);
		setHeldSWX(temp);
	}
	useEffect(() => {
		getSWXBalance();
	}, [swxContract, address]);

	useEffect(() => {
		if (typeof heldSWX !== 'undefined') {
			let tempbal: any = ethers.utils.parseEther(heldSWX.toString());
			tempbal = tempbal.toLocaleString('en-us', { minimumFractionDigits: 2 });
			setDisplaySWX(tempbal.toLocaleString());
		}
	}, [heldSWX]);

	function fillMaxTokens() {
		setAmountToDeposit(heldSWX);
	}

	async function getBalances() {
		if (contract?.read?.balanceAvailable && address) {
			console.log(contract?.read);
			const tempWithdrawAmount: any = await contract?.read?.balanceAvailable(address);
			setWithdrawAmount(tempWithdrawAmount);
			console.log({ tempWithdrawAmount });
			let tempbal: any = ethers.utils.parseEther(tempWithdrawAmount.toString());
			tempbal = tempbal.toLocaleString('en-us', { minimumFractionDigits: 2 });
			setDisplayWithdrawAmount(tempbal.toLocaleString());
		}
	}

	useEffect(() => {
		getBalances();
	}, [contract, address]);

	const depositMinMax = (value: any) => {
		// max is heldSWX
		// min is 0
		// return !validInput.test(value) || value < 0 || value > 20 || typeof value == 'undefined'
		// 	? null
		// 	: value;
	};

	function handleAmountToDeposit(value: any) {
		console.log('Handling Change');
		const validInput = new RegExp('^[0-9]*$');
		setAmountToDeposit((v: any) => {
			if (validInput.test(value)) {
				// true if number or undefined
				console.log('undefined number check', value);
				if (value > 0 && value < 20) {
					return value;
				} else if (value === '') {
					return value;
				} else {
					return v;
				}
			} else {
				return v;
			}
		});
	}

	async function deposit() {
		if (amountToDeposit == 0) {
			toast.error('Nothing to deposit');
			return null;
		}
		try {
			toast('Attempting Deposit');
			const tx = await contract?.write?.stake();
			const receipt = tx.await();
			console.log(receipt);
		} catch (error) {
			toast.error('Deposit Failed');
			console.error(error);
		}
	}

	async function withdraw() {
		if (withdrawAmount == 0) {
			toast.error('Nothing to withdraw');
			return null;
		}
		try {
			toast('Attempting Withdrawal');
			const tx = await contract?.write?.withdraw();
			const receipt = tx.await();
			// if receipt is confirmed, will have a status === 1, use for toast handling
			console.log(receipt);
		} catch (error) {
			toast.error('Withdrawal Failed');
			console.error(error);
		}
	}

	return (
		<>
			{isDepositModalOpen && (
				<Box className={styles.modalBackground} onClick={() => setIsDepositModalOpen(false)}></Box>
			)}
			<Box className={styles.containerWrapper}>
				<Box
					className={styles.container}
					sx={{ border: `1px solid #857afd`, backgroundColor: `#1d1055` }}
				>
					<Heading as="h3" sx={{ color: `white`, fontSize: `1.5rem`, fontWeight: `500` }}>
						{contractData.product_name}
					</Heading>
					<ConnectionIndicator />
					{/* Contract Metadata */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Box sx={{ color: `#857AFD` }}>
								{/* indicator modal thing */}
								<p>2 Yr. Reward</p>
							</Box>
							<h4>26.99%</h4>
						</div>
						<div>
							<Text sx={{ color: `#857AFD` }}>Vault Holdings</Text>
							<h4>2300.00 SWX</h4>
						</div>
					</Box>
					{/* Deposit */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Text sx={{ color: `#857AFD` }}>Available For Deposit</Text>
							{isConnected && contract?.read ? (
								<h4 className={styles.connected}>{displaySWX}</h4>
							) : (
								<h4 className={styles.disconnected}>0.00</h4>
							)}
						</div>
						<div>
							<DepositButton contract={contract} onClick={() => setIsDepositModalOpen(true)} />
						</div>
					</Box>
					{/* Claim */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Text sx={{ color: `#857AFD` }}>Available to Withdraw</Text>
							{isConnected ? (
								<h4 className={styles.connected}>{displayWithdrawAmount}</h4>
							) : (
								<h4 className={styles.disconnected}>0.00</h4>
							)}
						</div>
						<div>
							<WithdrawButton contract={contract} onClick={() => withdraw()} />
						</div>
					</Box>
				</Box>
				{isDepositModalOpen && (
					<Box className={styles.modal}>
						<Heading as="h3" sx={{ color: `white`, fontSize: `1.5rem`, fontWeight: `500` }}>
							{contractData.product_name}
						</Heading>
						<Box className={styles.modalInputArea}>
							<Box className={styles.modalTextInput}>
								<input
									type="text"
									pattern="[0-9]*"
									value={amountToDeposit}
									onChange={(e) => handleAmountToDeposit(e.target.value)}
								/>
								<button onClick={() => fillMaxTokens()}>max</button>
							</Box>
							<Box className={styles.modalCurrencyIndicator}>SWX</Box>
						</Box>
						<DepositButton contract={contract} onClick={() => deposit()} />
					</Box>
				)}
			</Box>
		</>
	);
};

export default BondingCard;

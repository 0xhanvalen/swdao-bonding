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
import ReactPaginate from 'react-paginate';

const BondingCard: any = (props: any) => {
	const amountToView = 8; // max rows for bonds
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
	const [rewardRate, setRewardRate] = useState<any>();
	const [APY, setAPY] = useState<any>();
	const [MPY, setMPY] = useState<any>();
	const [WPY, setWPY] = useState<any>();
	const [bondsPage, setBondsPage] = useState<number>(1);
	const [bonds, setBonds] = useState<any>([]);
	const SWDAddress = '0x24Ec3C300Ff53b96937c39b686844dB9E471421e';
	const contractData = props?.contract;
	console.log('address: ', contractData?.contract_address);
	const { isConnected, provider, chainId, address } = useWallet();

	const alchemyProvider = new ethers.providers.AlchemyProvider(
		'matic',
		'udDNia_66u_xVjkV4F97GyZv14rVLbCt',
	);

	interface Bond {
		depositDate: number;
		amount: number;
		withdrawn: number;
	}

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
		const tempDep = ethers.utils.parseEther(amountToDeposit.toString());
		if (amountToDeposit == 0) {
			toast.error('Nothing to deposit');
			return null;
		}
		try {
			toast('Attempting Deposit');
			const tx = await contract?.write?.stake(tempDep);
			const receipt = tx.await();
			console.log(receipt);
		} catch (error) {
			if (tempDep > heldSWX) {
				toast.error('Not Enough SWX');
				return null;
			}
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

	// new func - kwakamole
	function handlePageClick(event: any) {
		setBondsPage(event.selected + 1);
	}

	const getRewardPercent = async () => {
		console.log(contract?.read?.address);
		const thisAddress = contract?.read?.address;
		if (typeof provider == 'undefined') {
			return null;
		}
		if (provider == null) {
			return null;
		}
		const slot0: any = await alchemyProvider.getStorageAt(
			`${thisAddress}`,
			ethers.BigNumber.from('0'),
		);
		const bonusMin: any = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 21, 22));
		const bonusMax: any = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 20, 21));
		const bonusModifier: any = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 6, 20));
		const bonusResetDate: any = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 0, 6));
		const now: any = ethers.BigNumber.from(`${Math.floor(Date.now() / 1000)}`);
		const bonusRawThing: any = ethers.BigNumber.from(`${(now - bonusResetDate) * bonusModifier}`);
		const bonusRaw: any = Math.floor(bonusRawThing.div('1000000000000000000').add(bonusMin));
		const rate = bonusRaw > bonusMax ? bonusMax : bonusRaw;
		setRewardRate(`${rate}.00`);
		const thisAPY = 10 * (Math.sqrt(rate + 100) - 10);
		setAPY(thisAPY.toString().substring(0, 4));
		setMPY((100 * Math.pow(thisAPY / 100 + 1, 1 / 12) - 100).toString().substring(0, 4));
		setWPY((100 * Math.pow(thisAPY / 100 + 1, 1 / 52) - 100).toString().substring(0, 4));
	};

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

	const getBondsPage = async (page: number) => {
		const bondsAddress = contract?.read?.address;
		console.log({ bondsAddress });
		const bondsArrayHashData = ethers.utils.concat([
			ethers.utils.zeroPad(bondsAddress, 32),
			ethers.utils.zeroPad('0x01', 32),
		]);
		const bondsArraySlot: any = ethers.utils.keccak256(bondsArrayHashData);
		const bondsArrayFirstSlot: any = ethers.BigNumber.from(ethers.utils.keccak256(bondsArraySlot));
		// const totalBonds: any = ethers.BigNumber.from(
		// 	await contract?.read?.getStorageAt(amountToView, bondsArraySlot),
		// ).toNumber();
		const bondsThing: any = await alchemyProvider.getStorageAt(bondsAddress, bondsArraySlot);
		console.log({ bondsThing });
		// HERE: Check to make sure there are enough bonds to render the selected page.
		const bonds: Bond[] = [];
		const bondsArrayFirstPageSlot: ethers.BigNumber = bondsArrayFirstSlot.add(page * amountToView);
		console.log({ bondsArrayFirstPageSlot });
		// for (let i = 0; i < amountToView; i++) {
		// 	const bond: ethers.BytesLike = await contract?.read?.getStorageAt(
		// 		contract?.read?.address,
		// 		bondsArrayFirstPageSlot.add(i),
		// 	);
		// 	const depositDate: number = ethers.BigNumber.from(
		// 		ethers.utils.hexDataSlice(bond, 0, 11),
		// 	).toNumber();
		// 	const amount: number = ethers.BigNumber.from(
		// 		ethers.utils.hexDataSlice(bond, 12, 21),
		// 	).toNumber();
		// 	const withdrawn: number = ethers.BigNumber.from(
		// 		ethers.utils.hexDataSlice(bond, 22, 31),
		// 	).toNumber();
		// 	bonds.push({ depositDate, amount, withdrawn });
		// }
		// console.log({ bonds });
	};

	useEffect(() => {
		getBalances();
		if (typeof contract !== 'undefined') {
			getRewardPercent();
		}
	}, [contract, address, provider]);

	useEffect(() => {
		if (typeof address !== 'undefined' && address !== null) {
			getBondsPage(bondsPage);
		}
	}, [address, bondsPage]);

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
						{/* Bond List */}
						<Box>
							<Box className={styles.bondTableHeader} sx={{ color: `#AADCFE` }}>
								<p>Deposit</p>
								<p>Amount</p>
								<p style={{ textAlign: `right` }}>Available</p>
							</Box>
							<br />
							{bonds?.length > 0 &&
								bonds.map((bond: any, index: number) => {
									if (index < amountToView * bondsPage && index >= amountToView * (bondsPage - 1)) {
										return (
											<Box
												className={styles.bondTableRow}
												sx={{ color: `#857AFD` }}
												_hover={{ color: `#AADCFE` }}
											>
												<p>{bond.depositDate}</p>
												<p>{bond.amount}</p>
												<p style={{ textAlign: `right` }}>{bond.maturationDate}</p>
											</Box>
										);
									}
								})}
							{bonds?.length > amountToView && (
								<Box className={styles.bondTablePages} style={{ width: '100%' }}>
									<ReactPaginate
										breakLabel="..."
										nextLabel="next >"
										onPageChange={handlePageClick}
										pageRangeDisplayed={5}
										pageCount={Math.floor(
											bonds?.length / amountToView + (bonds?.length % amountToView === 0 ? 0 : 1),
										)}
										previousLabel="< previous"
										renderOnZeroPageCount={undefined}
									/>
								</Box>
							)}
						</Box>
					</Box>
				)}
			</Box>
		</>
	);
};

export default BondingCard;

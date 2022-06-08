import { useWallet } from '@raidguild/quiver';
import { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import createContract from '../../../utils/contractMaker';
import ConnectionIndicator from '../../atoms/ConnectionIndicator/ConnectionIndicator';
import DepositButton from '../../atoms/LiquidityMining/DepositButton';
import styles from './BondingCard.module.scss';
import { SWDABI } from './SWDABI';

const BondingCard: any = (props: any) => {
	const [cardState, setCardState] = useState<string>('');
	const [contract, setContract] = useState<any>();
	const [swdContract, setSWDContract] = useState<any>();
	const [heldSWD, setHeldSWD] = useState<any>();
	const SWDAddress = '0x24Ec3C300Ff53b96937c39b686844dB9E471421e';
	const contractData = props?.contract;
	console.log('address: ', contractData?.contract_address);
	const { isConnected, provider, chainId } = useWallet();
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
			setSWDContract({ read: tempContract.read, write: tempContract.write });
		}
	}

	useEffect(() => {
		getContract();
	}, [isConnected, provider, chainId]);

	// useEffect(() => {});

	// useEffect(() => {}, [contract]);

	return (
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
					{isConnected && contract?.read ? <></> : <h4 className={styles.disconnected}>0.00</h4>}
				</div>
				<div>
					<DepositButton contract={contract} />
				</div>
			</Box>
			{/* Claim */}
			<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
				<div>
					<Text sx={{ color: `#857AFD` }}>Available to Withdraw</Text>
					{isConnected ? <></> : <h4 className={styles.disconnected}>0.00</h4>}
				</div>
				<div>{/* Claim Button */}</div>
			</Box>
		</Box>
	);
};

export default BondingCard;

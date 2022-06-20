import { FullHeightPage } from '../templates/FullHeightPage';
import { Box, Center, Heading, Link, Text } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useQueryParams } from 'hookrouter';
import { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import createContract from '../../utils/contractMaker';
import BondingCard from '../molecules/BondingCard/BondingCard';

export default function BondingPage(): JSX.Element {
	const [contractData, setContractData] = useState<any>(null);

	async function getContracts() {
		try {
			const { data, error } = await supabase
				.from('Liquidity Mining Contracts')
				.select('*')
				.range(0, 9);
			if (error) throw error;
			if (data) {
				setContractData(data);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getContracts();
	}, []);

	useEffect(() => {
		console.log(contractData);
	}, [contractData]);

	return (
		<FullHeightPage>
			<div
				style={{
					display: `grid`,
					gridTemplateColumns: `1fr 1fr 1fr`,
					margin: `0 auto`,
					placeItems: `center`,
				}}
			>
				{contractData?.length > 0 &&
					contractData.map((contract: any, index: number) => {
						return <BondingCard contract={contract} key={index} />;
					})}
			</div>
		</FullHeightPage>
	);
}

import React from "react";
import Heading from "elements/heading";
import Text from "elements/text";
import { Box } from "elements";
import FBox from "elements/fbox";
import { BasicVar, FontSize, FontStyle } from "styles/variables";
import Tab from "components/tab";
import { useSearchParams } from "react-router-dom";
import Img from "elements/img";
import Icon from "components/icon";
import { _APIImage } from "constants/image.constant";
import Button from "components/btn";

const tabs: CategoryItemType[] = [
	{ label: "All", key: '', badge: '6' },
	{ label: "Staked", key: 'staked', badge: '6' }
]

interface DataType {
	number: number
	name: string
	img: any
	cost: number
	monthly: number[]
	ape: number[]
}

const data: DataType[] = [
	{ number: 26, name: 'Astro Army', img: '1.png', cost: 1.6, monthly: [6, 12, 24], ape: [15, 25, 120] },
	{ number: 26, name: 'Astro Army', img: '2.png', cost: 1.6, monthly: [6, 12, 24], ape: [15, 25, 120] },
	{ number: 26, name: 'Astro Army', img: '4.png', cost: 1.6, monthly: [6, 12, 24], ape: [15, 25, 120] },
	{ number: 26, name: 'Astro Army', img: '4.png', cost: 1.6, monthly: [6, 12, 24], ape: [15, 25, 120] },
	{ number: 26, name: 'Astro Army', img: '3.png', cost: 1.6, monthly: [6, 12, 24], ape: [15, 25, 120] },
	{ number: 26, name: 'Astro Army', img: '4.png', cost: 1.6, monthly: [6, 12, 24], ape: [15, 25, 120] }
]

const Staking = () => {
	const [params, setParams] = useSearchParams()

	return (
		<React.Fragment>
			<Heading level={2} >Staking</Heading>
			<Text mb={'2rem'}>Stake your Asterfi to earn $APE</Text>
			<Box
				bg={BasicVar.bg2.label}
				bdradius={BasicVar.bRadius3.label}
				p={'1.5rem 2.5rem'}
				mb={'2rem'}
			>
				<FBox valign={'center'} hAlign={'space-between'}>
					<FBox fDir={'column'} g={'0.5rem'}>
						<Text color={BasicVar.color2.label}>Total Supply</Text>
						<Text fFamily={BasicVar.font3.value} fSize={FontSize.fSize3.value}>8</Text>
					</FBox>
					<Box w={'3px'} h={'2.5rem'} bg={BasicVar.border2.label} bdradius={BasicVar.bRound.label} />
					<FBox fDir={'column'} g={'0.5rem'}>
						<Text color={BasicVar.color2.label}>Total Locked Supply(TLS)</Text>
						<Text
							fFamily={BasicVar.font3.value}
							fSize={FontSize.fSize3.value}
						>6</Text>
					</FBox>
					<Box w={'3px'} h={'2.5rem'} bg={BasicVar.border2.label} bdradius={BasicVar.bRound.label} />
					<FBox fDir={'column'} g={'0.5rem'}>
						<Text color={BasicVar.color2.label}>Market Cap</Text>
						<Text fFamily={BasicVar.font3.value} fSize={FontSize.fSize3.value}>
							<Text fSize={FontSize.fSize6.label} color={BasicVar.color2.value}>$</Text>
							389,9786
							<Text fSize={FontSize.fSize6.label} color={BasicVar.color2.value}>.59</Text>
						</Text>
					</FBox>
				</FBox>
			</Box>
			<Tab
				items={tabs}
				activeKey={tabs.findIndex((item: CategoryItemType, key: number) => item.key === (!!params.get('key') ? params.get('key') : ''))}
				setActiveKey={(item: CategoryItemType) => setParams({ key: item.key || '' })}
			>
				<FBox
					fWrap={'wrap'}
					m={'0 -1rem'}
				>
					{data.map((item: DataType, key: number) => (
						<Box
							key={key}
							w={'50%'}
							p={'0 1rem'}
							mb={'1rem'}
							pb={'0.5rem'}
						>
							<FBox
								valign={'center'}
								g={'1rem'}
								p={'1.5rem'}
								bg={BasicVar.bg2.label}
								bdradius={BasicVar.bRadius3.label}
							>
								<Img maxW={'50%'} alt={`nft-${key}`} src={'/nfts/' + item.img} />
								<Box flex={1}>
									<FBox valign={'center'} hAlign={'space-between'} mb={'0.8rem'}>
										<Heading level={4} mb={'0'}>{item.name}</Heading>
										<Text color={BasicVar.color2.label}>#{item.number}</Text>
									</FBox>
									<FBox valign={'center'} g={'0.5rem'} mb={'0.8rem'} color={BasicVar.color2.label}>
										<Icon icon="Ethereum" width={"20px"} height={"20px"} />
										<Text>{item.cost}</Text>
									</FBox>
									<FBox valign={'center'} g={'0.5rem'} mb={'0.8rem'}>
										<Icon icon="Clock" width={"20px"} height={"20px"}  />
										<Text>{item.monthly.join('/') + ' Months'}</Text>
									</FBox>
									<FBox valign={'center'} g={'0.5rem'} mb={'0.8rem'}>
										<Img src={_APIImage} />
										<Text>{item.monthly.join('/') + ' APE'}</Text>
									</FBox>
									<Button w={'100%'}>
										<Icon icon={"FillLock"} />
										<Text txtTrans={'uppercase'} fWeight={FontStyle.bold.label}>Stake</Text>
									</Button>
								</Box>
							</FBox>
						</Box>
					))}
				</FBox>
			</Tab>
		</React.Fragment>
	)
}

export default Staking;

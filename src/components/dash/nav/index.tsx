import React from "react";
import { useLocation } from "react-router-dom";
import FBox from "elements/fbox";
import _MENUITEMS from "constants/data/menu.constant";
import Link from "elements/link";
import { BasicVar, FontSize } from "styles/variables";
import Text from "elements/text";

interface NavItemProps {
	children: any
	active: boolean
	to: string
	badge?: string | number
}

const NavItem: React.FC<NavItemProps> = ({ children, to, active, badge }) => (
	<FBox as={'li'}>
		<Link
			to={to}
			w={'100%'}
			p={'1rem 1.5rem'}
			bg={active ? 'linear-gradient(101.05deg, rgba(88, 209, 182, 0.3) -5.36%, rgba(45, 81, 67, 0.3) 29.46%, rgba(36, 88, 67, 0.3) 56.03%, rgba(88, 209, 182, 0.3) 81.92%)' : 'transparent'}
			fsize={FontSize.fSize5.label}
			color={active ? BasicVar.color.label : BasicVar.color2.label}
			bdradius={BasicVar.bRound.label}
			transition={'all ease-in-out .2s'}
		>
			{children}
		</Link>
	</FBox>
)

const Nav = () => {
	const location = useLocation();
	const routeKey = location.pathname.split("/")[2];

	return (
		<FBox fDir={'column'}>
			{_MENUITEMS.map((item: CategoryItemType, key: number) => (
				<NavItem key={key} to={item.link || ''} badge={item.badge} active={(!!routeKey ? routeKey : '') === item.link}>
					{item.icon}
					<Text>{item.label}</Text>
				</NavItem>
			))}
		</FBox>
	)
}

export default Nav;
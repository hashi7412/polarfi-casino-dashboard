import React from "react";
import { useLocation } from "react-router-dom";
import FBox from "elements/fbox";
import _MENUITEMS from "constants/data/menu.constant";
import Link from "elements/link";
import { BasicVar } from "styles/variables";
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
			p={'1rem 1.5rem'}
			bdradius={'0.8rem'}
			color={active ? BasicVar.color.label : BasicVar.color2.label}
			bg={active ? BasicVar.bg2.label : 'transparent'}
			w={'100%'}
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
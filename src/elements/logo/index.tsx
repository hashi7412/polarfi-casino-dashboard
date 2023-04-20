import React from "react";
import Link from "elements/link";
import Heading from "elements/heading";
import Text from "elements/text";
import { DefaultColor } from "styles/variables";
import Img from "elements/img";

interface LogoProps {
	text?: string,
	w?: string
	h?: string
}

const Logo = ({ text, w, h }: LogoProps) => {
	return (
		<Link to={'/'} w={w || ''} h={h || ''}>
			<Img src={'/logo192.webp'} />
		</Link>
	)
}

export const Logo2 = () => {
	return (
		<Link to={'/'}>
			<Heading level={1}>
				<Text color={DefaultColor.primary.label}>Car</Text>ShowRoom Management
			</Heading>
		</Link>
	);
}

export default Logo;

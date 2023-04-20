import React from "react";
import { Link } from "react-router-dom";
import Heading from "elements/heading";
import Text from "elements/text";
import { DefaultColor } from "styles/variables";

interface LogoProps {
	text?: string
}

const Logo = ({ text }: LogoProps) => {
	return (
		<Link to={'/'}>
			<Heading level={1}>
				<Text color={DefaultColor.primary.label}>Car</Text>ShowRoom
			</Heading>
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

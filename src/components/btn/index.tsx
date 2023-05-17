import React from "react";
import { BoxPropsType } from "elements/box";
import { BasicVar, DefaultColor } from "styles/variables";
import FBox from "elements/fbox";

interface ButtonProps extends BoxPropsType {
	children?: any
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {

	return (
		<FBox
			valign={'center'}
			hAlign={'center'}
			as={'button'}
			g={'0.5rem'}
			p={'0.7rem 2rem'}
			bg={rest.bg || DefaultColor.primary.label}
			bdradius={BasicVar.bRound.label}
			color={rest.color || DefaultColor.light.label}
			transition={'all ease-in-out .2s'}
			{...rest}
		>
			{children}
		</FBox>
	)
}

export default Button;
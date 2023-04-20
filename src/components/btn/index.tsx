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
			p={'0.8rem 1.5rem'}
			bg={DefaultColor.warning.label}
			bdradius={BasicVar.bRadius1.label}
			color={DefaultColor.black.label}
			{...rest}
		>
			{children}
		</FBox>
	)
}

export default Button;
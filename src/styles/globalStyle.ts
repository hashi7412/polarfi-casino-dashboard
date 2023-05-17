import { createGlobalStyle } from "styled-components";
import { AsideVar, BasicVar, ChatboxVar, DefaultColor, DeviceWidth, FontSize, FontStyle, HeaderVar, styledShadow } from "./variables";
import { setVariable } from "utils/style.utils";
import ArefRuqaa from "assets/font/aref-ruqaa/ArefRuqaa-Regular.ttf";
import Gilroy from "assets/font/gilroy/Gilroy-Regular.ttf";
import GilroyMedium from "assets/font/gilroy/Gilroy-Medium.ttf";
import TitanOne from "assets/font/titan-one/TitanOne-Regular.ttf";
import Amita from "assets/font/amita/Amita-Regular.ttf";

const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: ${BasicVar.font1.value};
        src: url(${Gilroy});
        font-weight: ${FontStyle.normal.value};
        font-style: normal;
    }

	@font-face {
		font-family: ${BasicVar.font1.value};
		src: url(${GilroyMedium});
		font-weight: ${FontStyle.bold.value};
		font-style: normal;
	}

	@font-face {
		font-family: ${BasicVar.font3.value};
		src: url(${ArefRuqaa});
		font-weight: ${FontStyle.normal.value};
		font-style: normal;
	}

	@font-face {
		font-family: ${BasicVar.font2.value};
		src: url(${TitanOne});
		font-weight: ${FontStyle.normal.value};
		font-style: normal;
	}

	@font-face {
		font-family: ${BasicVar.font4.value};
		src: url(${Amita});
		font-weight: ${FontStyle.normal.value};
		font-style: normal;
	}

	:root {
		${setVariable(DefaultColor)}
		${setVariable(DeviceWidth)}
		${setVariable(BasicVar)}
		${setVariable(FontSize)}
		${setVariable(FontStyle)}
		${setVariable(AsideVar)}
		${setVariable(HeaderVar)}
		${setVariable(ChatboxVar)}
	}

	*, *:before, *:after {
		box-sizing: inherit;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		text-transform: inherit;
		color: inherit;
	}

	body {
		margin: 0;
		background: ${BasicVar.bg.label};
		background-size: 120% 140%;
		background-position: 25% 100%;
		overflow: hidden;
    	/* user-select: none; */

		box-sizing: border-box !important;
		font-family: ${BasicVar.font1.label} !important;
		line-height: ${BasicVar.lineH.label} !important;
		font-size: ${FontSize.fSize.label} !important;
		color: ${BasicVar.color.label} !important;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}

	#root {
		position: relative;
		z-index: 1;
		overflow: hidden;
		min-height: 100vh;
	}
	
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	span {
		display: inline-block;
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	a, button, input[type=button], input[type=submit] {
		cursor: pointer;
	}

	button {
		border: none;
		outline: none;
	}

	input {
		min-width: 0;
	}

	table, td, th {
		border-collapse: collapse;
	}

	&::-webkit-scrollbar {
		position: absolute;
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		background: ${BasicVar.bg2.label};
		border-radius: 5px;
		box-shadow: ${styledShadow};
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: ${BasicVar.bg.label};
	}
`

export default GlobalStyle;

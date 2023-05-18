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

	html {
		font-family: sans-serif;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}

	body {
		margin: 0;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	menu,
	nav,
	section,
	summary {
		display: block;
	}

	audio,
	canvas,
	progress,
	video {
		display: inline-block;
		vertical-align: baseline;
	}

	audio:not([controls]) {
		display: none;
		height: 0;
	}

	[hidden], template {
		display: none;
	}

	a {
		background-color: transparent;
	}

	a:active,
	a:hover {
		outline: 0;
	}

	abbr[title] {
		border-bottom: none;
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	b,
	strong {
		font-weight: bold;
	}

	dfn {
		font-style: italic;
	}

	mark {
		background: #ff0;
		color: #000;
	}

	small {
		font-size: 80%;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sup {
		top: -0.5em;
	}

	sub {
		bottom: -0.25em;
	}

	img {
		border: 0;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	figure {
		margin: 1em 40px;
	}

	hr {
		box-sizing: content-box;
		height: 0;
	}

	pre {
		overflow: auto;
	}

	code,
	kbd,
	pre,
	samp {
		font-family: monospace, monospace;
		font-size: 1em;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		color: inherit;
		font: inherit;
		margin: 0;
	}

	button {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	html input[type="button"],
	input[type="reset"],
	input[type="submit"] {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
		cursor: pointer;
	}

	button[disabled],
	html input[disabled] {
		cursor: default;
	}

	button::-moz-focus-inner,
	input::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	input {
		line-height: normal;
	}

	input[type="checkbox"],
	input[type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	input[type="search"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
		box-sizing: content-box;
	}

	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	fieldset {
		border: 1px solid #c0c0c0;
		margin: 0 2px;
		padding: 0.35em 0.625em 0.75em;
	}

	legend {
		border: 0;
		padding: 0;
	}

	textarea {
		overflow: auto;
	}

	optgroup {
		font-weight: bold;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
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

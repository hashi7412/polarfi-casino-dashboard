
// Global Variables

const DefaultColor = {
	white:			{ value: '#ffffff',			key: '--white',			label: 'var(--white)' },
	black:			{ value: '#000000',			key: '--black',			label: 'var(--black)' },
	light:			{ value: '#f8f9fa',			key: '--light',			label: 'var(--light)' },
	dark:			{ value: '#343a40',			key: '--dark',			label: 'var(--dark)' },
	primary:		{ value: '#959DE1',			key: '--primary',		label: 'var(--primary)' },
	success:		{ value: '#29CF00',			key: '--success',		label: 'var(--success)' },
	danger:			{ value: '#FF0039',			key: '--danger',		label: 'var(--danger)' },
	warning:		{ value: '#C5FF4B',			key: '--warning',		label: 'var(--warning)' },
	info:			{ value: '#17a2b8',			key: '--info',			label: 'var(--info)' },
}

const DeviceWidth = {
	mobileS:		{ value: '320px',			key: '--mxs',			label: 'var(--mxs)' },
	mobileM:		{ value: '375px',			key: '--mxs',			label: 'var(--mxs)' },
	mobileL:		{ value: '425px',			key: '--mxs',			label: 'var(--mxs)' },
	tablet:			{ value: '768px',			key: '--mxs',			label: 'var(--mxs)' },
	laptop:			{ value: '1024px',			key: '--mxs',			label: 'var(--mxs)' },
	laptopM:		{ value: '1200px',			key: '--mxs',			label: 'var(--mxs)' },
	laptopL:		{ value: '1440px',			key: '--mxs',			label: 'var(--mxs)' },
	desktop:		{ value: '2560px',			key: '--mxs',			label: 'var(--mxs)' },
}

export const device = {
	mobileS:		`(max-width: ${DeviceWidth.mobileS.value})`,
	mobileM:		`(max-width: ${DeviceWidth.mobileM.value})`,
	mobileL:		`(max-width: ${DeviceWidth.mobileL.value})`,
	tablet:		 	`(max-width: ${DeviceWidth.tablet.value})`,
	laptop:		 	`(max-width: ${DeviceWidth.laptop.value})`,
	laptopL:		`(max-width: ${DeviceWidth.laptopL.value})`,
	desktop:		`(max-width: ${DeviceWidth.desktop.value})`,
	desktopL:		`(max-width: ${DeviceWidth.desktop.value})`
};

// Basic Variables
const BasicVar = {
	font1:			{ value: 'Gilroy',		 		key: '--font1', 				label: 'var(--font1)' },
	font2:			{ value: 'Tital-One',			key: '--font2', 				label: 'var(--font2)' },
	font3:			{ value: 'ArefRuqaa',			key: '--font3', 				label: 'var(--font3)' },
	font4:			{ value: 'Amita',				key: '--font4', 				label: 'var(--font4)' },
	lineH:			{ value: '1.5em', 				key: '--line-height', 			label: 'var(--line-height)' },
	bg:				{ value: '#1A1428', 			key: '--bg', 					label: 'var(--bg)' },
	bg2:			{ value: '#1B1C2D', 			key: '--bg2', 					label: 'var(--bg2)' },
	bgCard:			{ value: '#1F2630', 			key: '--bg-card', 				label: 'var(--bg-card)' },
	bgOpacity:		{ value: '#4a4a4a1a',			key: '--bg-opacity', 			label: 'var(--bg-opacity)' },
	bgOpacity2:		{ value: 'rgba(17, 15, 22, 0.5)',key: '--bg-opacity', 			label: 'var(--bg-opacity)' },
	bgInput:		{ value: '#171C23', 			key: '--bg-input', 				label: 'var(--bg-input)' },
	color:			{ value: '#ffffff', 			key: '--color', 				label: 'var(--color)' },
	color2:			{ value: '#5e7185', 			key: '--color2', 				label: 'var(--color2)' },
	color3:			{ value: '#ffffff88', 			key: '--color3', 				label: 'var(--color3)' },
	border:			{ value: '#ffffff40', 			key: '--border', 				label: 'var(--border)' },
	border2:		{ value: '#54597C', 			key: '--border2', 				label: 'var(--border2)' },
	bRadius1:		{ value: '0.5rem',				key: '--bradius1',				label: 'var(--bradius1)' },
	bRadius2:		{ value: '2rem',				key: '--bradius2',				label: 'var(--bradius2)' },
	bRadius3:		{ value: '1.5rem',				key: '--bradius3',				label: 'var(--bradius3)' },
	bRound:			{ value: '100rem',				key: '--bRound',				label: 'var(--bRound)' },
	bRadius:		{ value: '100%',				key: '--bRadius',				label: 'var(--bRadius)' },

	containerXPadding:{ value: '3rem',				key: '--container-xpadding',	label: 'var(--container-xpadding)' }
}

const FontSize = {
	fSize:			{ value: '1rem',				key: '--fsize',					label: 'var(--fsize)' },
	fSize1:			{ value: '2.5rem',				key: '--fsize1',				label: 'var(--fsize1)' },
	fSize2:			{ value: '2rem',				key: '--fsize2',				label: 'var(--fsize2)' },
	fSize3:			{ value: '1.5rem',				key: '--fsize3',				label: 'var(--fsize3)' },
	fSize4:			{ value: '1.3rem',				key: '--fsize4',				label: 'var(--fsize4)' },
	fSize5:			{ value: '1rem',				key: '--fsize5',				label: 'var(--fsize5)' },
	fSize6:			{ value: '0.8rem',				key: '--fsize6',				label: 'var(--fsize6)' },
}

const FontStyle = {
	light:			{ value: '300',					key: '--flight',				label: 'var(--flight)' },
	normal:			{ value: '400',					key: '--fnormal',				label: 'var(--fnormal)' },
	medium:			{ value: '500',					key: '--fmedium',				label: 'var(--fmedium)' },
	bold:			{ value: '700',					key: '--fbold',					label: 'var(--fbold)' },
}

export const styledShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';

// Custom Variables

export const AsideVar = {
	w:				{ value: '250px',					key: '--aside-width',			label: 'var(--aside-width)' },
	tabletW:		{ value: '80px',					key: '--aside-tabletW',			label: 'var(--aside-tabletW)' }
}

export const HeaderVar = {
	h:				{ value: '100px',					key: '--header-width',			label: 'var(--header-width)' },
}

export const ChatboxVar = {
	w:				{ value: '350px',					key: '--chatbox-width',			label: 'var(--chatbox-width)' },
}

export {
	DefaultColor,
	BasicVar,
	FontSize,
	DeviceWidth,
	FontStyle
}

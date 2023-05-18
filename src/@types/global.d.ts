declare module "*.ttf";
declare module "*.otf";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare interface UserObject {
	token?:				string
	userame:			string
	name?:				string
	avatar?:			string | any
}

declare interface StoreObject {
	lang:				string
	theme:				'dark' | 'light'
	user:				UserObject | null
	isChat:				boolean,
	isMobileNav:		boolean
	cookie:			string | null
}

declare interface CSSInlineStyleType {
	bs?:				BoxSizingType
	position?:			PositionType
	zIndex?:			ZIndexType
	top?:				PosType
	right?:				PosType
	bottom?:			PosType
	left?:				PosType
	transform?:			TransformType
	dplay?:				DisplayType
	flex?:				FlexType
	fBasis?:			FlexBasisType
	fDir?:				FlexDirectionType
	fFlow?:				FlexFlowType
	fGrow?:				FlexGrowType
	fShrink?:			FlexShrinkType
	fWrap?:				FlexWrapType
	alignContent?:		AlignContentType
	alignItems?:		AlignItemsType
	valign?:			AlignItemsType
	alignSelf?:			AlignSelfType
	alignTracks?:		AlignTracksType
	justifyContent?:	JustifyContentType
	hAlign?:			JustifyContentType
	justifyItems?:		JustifyItemsType
	justifySelf?:		JustifySelfType
	justifyTracks?:		JustifyTracksType
	g?:					GapType
	gx?:				GapType
	gy?:				GapType
	w?:					WidthType
	minW?:				WidthType
	maxW?:				WidthType
	h?:					HeightType
	minH?:				HeightType
	maxH?:				HeightType
	p?:					PaddingType
	px?:				PaddingType
	py?:				PaddingType
	pt?:				PaddingType
	pr?:				PaddingType
	pb?:				PaddingType
	pl?:				PaddingType
	m?:					MarginType
	mx?:				MarginType
	my?:				MarginType
	mt?:				MarginType
	mr?:				MarginType
	mb?:				MarginType
	ml?:				MarginType
	bg?:				BgType
	fFamily?:			FontFamilyType
	fsize?:				FontSizeType
	fWeight?:			FontWeightType
	tAlign?:			TextAlignType
	txtTrans?:			TextTransformType
	lSpace?:			LetterSpacingType
	color?:				ColorType
	wordWrap?:			WordWrapType
	bgAttachment?:		BgAttachmentType
	bgBlendMode?:		BgBlendModeType
	bgClip?:			BgClipType
	bgColor?:			BgColorType
	bgImg?:				BgImageType
	bgOrigin?:			BgOriginType
	bgPos?:				BgPositionType
	bgPosX?:			BgPositionXType
	bgPoxY?:			BgPositionYType
	bgRepeat?:			BgRepeatType
	bgSize?:			BgSizeType
	backdrop?:			BackdropFilterType
	bd?:				BorderType
	bdt?:				BorderType
	bdr?:				BorderType
	bdb?:				BorderType
	bdl?:				BorderType
	otl?:				OutlineType
	otlt?:				OutlineType
	otlr?:				OutlineType
	otlb?:				OutlineType
	otll?:				OutlineType
	bdradius?:			BoxShadowType
	bShadow?:			BorderShadowType
	tShadow?:			TextShadowType
	overflow?:			OverflowType
	overflowX?:			OverflowType
	overflowY?:			OverflowType
	transition?:		TransitionType
	cursor?:			CursorType
	content?:			ContentType
	clipPath?:			ClipPathType
	other?:				string
}

declare interface CSSElementStyleType extends CSSInlineStyleType {
	after?:				CSSInlineStyleType
	before?:			CSSInlineStyleType
	hover?:				CSSInlineStyleType
	active?:			CSSInlineStyleType
}

declare interface CSSResponsiveStyleType extends CSSElementStyleType {
	mobileS?:			CSSElementStyleType
	mobileM?:			CSSElementStyleType
	mobileL?:			CSSElementStyleType
	tablet?:			CSSElementStyleType
	laptop?:			CSSElementStyleType
	laptopL?:			CSSElementStyleType
	desktop?:			CSSElementStyleType
	desktopL?:			CSSElementStyleType
}

declare interface ElementEventType {
	onClick?:			() => void
	onChange?:			() => void
}

declare interface ElementDefaultProps extends CSSResponsiveStyleType, HTMLAttributes, ElementEventType {
	[key: string]: any
}
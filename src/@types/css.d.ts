declare type CSSGlabalType = 'initial' | 'inhert' | 'revert' | 'revert-layer' | 'unset'
declare type UnitValType = string

declare type BoxSizingType                  = CSSOriginType | 'border-box' | 'content-box'

declare type PositionType					= CSSOriginType | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
declare type ZIndexType						= CSSOriginType | 'auto' | number
declare type PosType						= CSSOriginType | UnitValType | 'auto'

declare type TransformType					= CSSOriginType | string

declare type DisplayType					= CSSOriginType | 'block' | 'inline' | 'inline-block' | 'none' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root' | 'contents' | 'table' | 'inline-table' | 'table-row' | 'table-row-group' | 'table-caption' | 'table-cell' | 'table-column' | 'table-column-group' | 'table-footer-group' | 'table-header-group' | 'list-item' | 'block flow' | 'inline flow' | 'inline flow-root' | 'block flex' | 'inline flex' | 'block grid' | 'inline grid' | 'block flow-root'

declare type FlexType						= CSSOriginType | 'auto' | 'none' | 'min-content' | number | string
declare type FlexBasisType					= CSSOriginType | 'auto' | 'max-content' | 'min-content' | 'fit-content' | 'content' | string
declare type FlexDirectionType				= CSSOriginType | 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'nowrap' | 'wrap' | 'wrap-reverse' | string
declare type FlexFlowType					= CSSOriginType | 'row' | 'column' | 'row-reverse' | 'column-reverse'
declare type FlexGrowType					= CSSOriginType | number
declare type FlexShrinkType					= CSSOriginType | number
declare type FlexWrapType					= CSSOriginType | 'nowrap' | 'wrap' | 'wrap-reverse'

declare type AlignContentType				= CSSOriginType | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'normal' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe' | 'unsafe' | string
declare type AlignItemsType					= CSSOriginType | 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe' | 'unsafe' | string
declare type AlignSelfType					= CSSOriginType | 'auto' | 'normal' | 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'stretch' | 'safe' | 'unsafe' | string
declare type AlignTracksType				= CSSOriginType | 'start' | 'end' | 'center' | 'normal' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | string

declare type JustifyContentType				= CSSOriginType | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'left' | 'right' | 'normal' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe' | 'unsafe' | string
declare type JustifyItemsType				= CSSOriginType | 'normal' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'center' | 'left' | 'right' | 'baseline' | 'first baseline' | 'last baseline' | 'stretch' | 'safe' | 'unsafe' | 'legacy' | string
declare type JustifySelfType				= CSSOriginType | 'auto' | 'normal' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'center' | 'left' | 'right' | 'baseline' | 'first baseline' | 'last baseline' | 'stretch' | 'safe' | 'unsafe' | string
declare type JustifyTracksType				= CSSOriginType | 'start' | 'end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'left' | 'right' | string

declare type GapType						= CSSOriginType | UnitValType

declare type FontFamilyType					= CSSOriginType | string
declare type FontSizeType					= CSSOriginType | string
declare type FontWeightType                 = CSSOriginType | 'light' | 'normal' | 'bold' | 'semi-bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
declare type ColorType						= CSSOriginType | 'currentcolor' | string
declare type WordWrapType                   = CSSOriginType | 'normal' | 'break-word'

declare type TextAlignType                  = CSSOriginType | 'center' | 'right' | 'left'
declare type TextTransformType              = CSSOriginType | 'uppercase' | 'lowercase' | 'capitalize'
declare type LetterSpacingType              = CSSOriginType | 'normal' | UnitValType

declare type PaddingType					= CSSOriginType | string

declare type MarginType						= CSSOriginType | 'auto'

declare type HeightType						= CSSOriginType | 'max-content' | 'min-content' | 'auto' | string
declare type WidthType						= CSSOriginType | 'max-content' | 'min-content' | 'auto' | string

declare type BgType							= CSSOriginType | string
declare type BgAttachmentType				= CSSOriginType | 'scroll' | 'fixed' | 'local' | 'local, scroll' | 'scroll, local'
declare type BgBlendModeType				= CSSOriginType | 'normal' | 'multiply' | 'hard-light' | 'difference' | string
declare type BgClipType						= CSSOriginType | 'border-box' | 'padding-box' | 'content-box' | 'text'
declare type BgColorType					= CSSOriginType | 'currentcolor' | 'transparent'
declare type BgImageType					= CSSOriginType | ImageBitmap | string
declare type BgOriginType					= CSSOriginType | 'border-box' | 'padding-box' | 'content-box'
declare type BgPositionType					= CSSOriginType | 'top' | 'left' | 'center' | 'bottom' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right' | string
declare type BgPositionXType				= CSSOriginType | 'left' | 'right' | 'center' | string
declare type BgPositionYType				= CSSOriginType | 'top' | 'bottom' | 'center' | string
declare type BgRepeatType					= CSSOriginType | 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | 'repeat space' | 'repeat repeat' | 'round space' | 'no-repeat round'
declare type BgSizeType						= CSSOriginType | 'contain' | 'cover' | 'auto'

declare type BackdropFilterType             = CSSOriginType | 'none' | string

declare type BorderType						= CSSOriginType | string
declare type OutlineType					= CSSOriginType | string

declare type BorderRadiusType               = CSSOriginType | string

declare type BoxShadowType                  = CSSOriginType | string
declare type TextShadowType                 = CSSOriginType | string

declare type OverflowType					= CSSOriginType | 'auto' | 'hidden' | 'overflow-y' | 'overflow-x'

declare type TransitionType    				= CSSOriginType | string

declare type CursorType	    				= CSSOriginType | 'default' | 'pointer' | 'text' | 'alias' | 'all-scroll' | 'auto' | 'cell' | 'col-resize' | 'context-menu' | 'copy' | 'crosshair' | 'e-resize' | 'default' | 'ew-resize' | 'grab' | 'grabbing' | 'help' | 'move' | 'n-resize' | 'ne-resize' | 'nesw-resize' | 'ns-resize' | 'nw-resize' | 'nwse-resize' | 'no-drop' | 'none' | 'not-allowed' | 'progress' | 'row-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'wait' | 'zoom-in' | 'zoom-out' | string
declare type ClipPathType    				= CSSOriginType | 'circle' | 'ellipse' | 'polygon' | 'url' | 'inset' | string

declare type ContentType					= CSSOriginType | 'normal' | 'none' | 'prefix' | 'open-quote' | 'close-quote' | 'no-open-quote' | 'no-close-quote' | string

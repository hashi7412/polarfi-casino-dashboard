import styled from 'styled-components'

import { setPseudoStyle } from 'elements/box/styles/box.styled';
import { device } from 'styles/variables'

export const StyledImg = styled.img<ElementDefaultProps>`
	${props => {
		const { mobileS, mobileM ,mobileL, tablet, laptop, laptopL, desktop, desktopL, ...rest } = props;

		return `
			${setPseudoStyle(rest)}

			${mobileM ? `
				@media ${device.mobileM} {
					${setPseudoStyle(mobileM)}
				}` : ``
			}

			${mobileM ? `
				@media ${device.mobileM} {
					${setPseudoStyle(mobileM)}
				}` : ``
			}

			${mobileL ? `
				@media ${device.mobileL} {
					${setPseudoStyle(mobileL)}
				}` : ``
			}

			${tablet ? `
				@media ${device.tablet} {
					${setPseudoStyle(tablet)}
				}` : ``
			}

			${laptop ? `
				@media ${device.laptop} {
					${setPseudoStyle(laptop)}
				}` : ``
			}

			${laptopL ? `
				@media ${device.laptopL} {
					${setPseudoStyle(laptopL)}
				}` : ``
			}

			${desktop ? `
				@media ${device.desktop} {
					${setPseudoStyle(desktop)}
				}` : ``
			}

			${desktopL ? `
				@media ${device.desktopL} {
					${setPseudoStyle(desktopL)}
				}` : ``
			}
		`
	}}
`

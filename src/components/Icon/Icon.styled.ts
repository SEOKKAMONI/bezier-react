/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { IconStyledProps } from './Icon.types'

function getMargin({
  margintop,
  marginright,
  marginbottom,
  marginleft,
}: IconStyledProps): string {
  return `${margintop}px ${marginright}px ${marginbottom}px ${marginleft}px`
}

const Icon = styled.svg<IconStyledProps>`
  color: ${props => props.color || 'inherit'};
  margin: ${getMargin};
  transition: ${props => props.theme?.transition?.ColorTransition};
`

export default Icon

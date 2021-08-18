import styled, { CSSObject } from 'styled-components'

interface FlexProps {
  center?: boolean
  vertical?: boolean
  heightScreen?: boolean
}

export const FlexContainer = styled.div(
  (props: FlexProps): CSSObject => ({
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: props.heightScreen ? '100vh' : 'auto',
    justifyContent: props.center ? 'center' : 'initial',
    alignItems: props.center ? 'center' : 'initial',
    flexDirection: props.vertical ? 'column' : 'row',
  }),
)

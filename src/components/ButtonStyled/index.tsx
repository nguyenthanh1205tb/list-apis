import React, { CSSProperties, PropsWithChildren } from 'react'
import { Button } from '@mui/material'
import { ButtonStyledProps } from './ButtonStyledProps'

function ButtonStyled(props: PropsWithChildren<ButtonStyledProps>) {
  const { children, style, ...rest } = props

  const textColorBySkyPalette = (): CSSProperties => {
    if (rest.color !== 'sky' && rest.variant !== 'contained')
      return { color: 'initial' }
    return { color: 'white' }
  }

  const styles: CSSProperties = {
    textTransform: 'inherit',
    ...textColorBySkyPalette(),
    ...style,
  }

  return (
    <Button {...rest} style={styles}>
      {children}
    </Button>
  )
}
export default ButtonStyled

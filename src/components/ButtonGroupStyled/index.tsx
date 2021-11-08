import React, { PropsWithChildren } from 'react'
import { ButtonGroup as MuiButtonGroup, styled, Theme } from '@mui/material'
import { ButtonGroupStyledProps } from 'src/components/ButtonGroupStyled/ButtonGroupStyled'
import { CSSProperties } from '@mui/styled-engine'

function ButtonGroupStyled(props: PropsWithChildren<ButtonGroupStyledProps>) {
  const { gap, children, ...rest } = props

  const gapStyle = (theme: Theme): CSSProperties => {
    const spacing = theme.spacing(gap ?? 0)
    if (rest.orientation === 'vertical') return { marginBottom: spacing }
    return { marginRight: spacing }
  }

  const ButtonGroupCustom = styled(MuiButtonGroup)(({ theme }) => ({
    'button:not(:last-child)': {
      ...gapStyle(theme),
    },
    '.MuiButtonGroup-grouped:not(:last-of-type)': {
      borderBottomRightRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },
    '.MuiButtonGroup-grouped:not(:first-of-type)': {
      borderTopRightRadius: theme.shape.borderRadius,
      borderTopLeftRadius: theme.shape.borderRadius,
    },
  }))
  return <ButtonGroupCustom {...rest}>{children}</ButtonGroupCustom>
}

export default ButtonGroupStyled

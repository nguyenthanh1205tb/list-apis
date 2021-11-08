import { Card, TextField, styled } from '@mui/material'
import theme from 'src/theme'

const CardStyled = styled(Card)(() => ({
  background: 'rgba(1, 48, 63, 0.7)',
  width: 375,
  padding: theme.spacing(3),
  borderRadius: 16,
}))

const TextFieldStyled = styled(TextField)(() => ({
  /**
   * STYLE FOR LABEL - TEXT FIELD OUTLINED
   */
  // normal
  '.MuiInputLabel-root.MuiInputLabel-outlined': {
    color: 'white',
    opacity: 0.7,
  },
  // error
  '.MuiInputLabel-root.MuiInputLabel-outlined.Mui-error': {
    color: theme.palette.error.light,
    opacity: 1,
  },
  // normal: while focus
  '.MuiInputLabel-root.MuiInputLabel-shrink.MuiInputLabel-outlined': {
    opacity: 1,
  },
  // error: while focus
  '.MuiInputLabel-root.MuiInputLabel-shrink.MuiInputLabel-outlined.Mui-error': {
    color: theme.palette.error.light,
  },
  /**
   * STYLE FOR INPUT (main) - TEXT FIELD OUTLINED
   */
  // normal
  '.MuiOutlinedInput-input': {
    color: 'white',
  },
  /**
   * STYLE FOR OUTLINED INPUT (wrap) - TEXT FIELD OUTLINED
   */
  '.MuiOutlinedInput-root': {
    '.MuiOutlinedInput-notchedOutline': {
      transition: 'all 300ms ease-out',
    },
  },
  // normal
  // hover
  '.MuiOutlinedInput-root, &:hover .MuiOutlinedInput-root': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      opacity: 0.3,
    },
  },
  // normal: while focus
  '.MuiOutlinedInput-root.Mui-focused': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      opacity: 0.7,
      borderWidth: 1,
    },
  },
  // error
  '.MuiOutlinedInput-root.Mui-error': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.light,
      opacity: 1,
    },
  },
  /**
   * STYLE FOR ICON (end) - TEXT FIELD OUTLINED
   */
  // normal
  '.MuiInputAdornment-root': {
    '.MuiIconButton-root': {
      color: 'white',
    },
  },
}))

export { CardStyled, TextFieldStyled }

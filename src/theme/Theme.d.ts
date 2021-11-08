import { Theme } from '@mui/material'
// import { ButtonPropsColorOverrides } from '@material-ui/core/Button/Button'

declare module '@mui/material/styles' {
  interface defaultTheme extends Theme {}
  interface Palette {
    sky: Palette['primary']
  }
  interface PaletteOptions {
    sky: PaletteOptions['primary']
  }
  interface PaletteColor {
    main: string
  }
  interface SimplePaletteColorOptions {
    main: string
  }
}

declare module '@mui/material/Button/Button' {
  interface ButtonPropsColorOverrides {
    sky: true
  }
}

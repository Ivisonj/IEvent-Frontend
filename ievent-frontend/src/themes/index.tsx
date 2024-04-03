import { ReactNode, useMemo } from 'react'

import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { createTheme, Direction, ThemeProvider } from '@mui/material/styles'

import Palette from './palette'
import Typography from './typography'
import CustomShadows, { ICustomShadows } from './shadows'
import componentsOverride from './overrides'

interface ThemeCustomizationProps {
  children: ReactNode
}

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const theme = Palette('light')

  const themeTypography = Typography(`'Google Sans', Poppins, sans-serif`)
  const themeCustomShadows: ICustomShadows = useMemo(
    () => CustomShadows(theme),
    [theme],
  )

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: 'ltr' as Direction,
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography, themeCustomShadows],
  )

  const themes = createTheme(themeOptions)
  themes.components = componentsOverride(themes)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

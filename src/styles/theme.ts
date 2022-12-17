import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#121212',
      800: '#2E2E2E',
      700: '#414141',
      500: '#747474',
      300: '#AEAEAE',
      200: '#D3D3D3',
      100: '#EEEEF2',
      50: '#FFFFFF',
      bg: '#080B0F',
      transparent: '#00000033'
    },
    green: {
      500: '#2ad100'
    },
    pink: {
      500: '#E3C1C1',
      border: '#1285b770',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: '#F9F9F9',
        color: 'gray.600'
      },
      html: {
        scrollBehavior: 'smooth'
      }
    }
  }
})

export default theme

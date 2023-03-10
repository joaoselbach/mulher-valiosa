import {
    IconProps as ChakraIconProps,
    Icon as ChakraIcon
  } from '@chakra-ui/react'
  
  type IconProps = {
    icon: any
  } & ChakraIconProps
  
  export function Icon({ icon, ...rest }: IconProps): JSX.Element {
    return <ChakraIcon as={icon} {...rest} />
  }
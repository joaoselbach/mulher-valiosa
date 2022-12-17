import { Button as ChakraButton, Image } from '@chakra-ui/react'

interface ButtonProps {
  children: string
  fontSize: any
  px: any
  py: any
  my?: string
  mx?: string
  mt?: string
}

export const SolidButton = ({
  children,
  fontSize,
  py,
  px,
  my,
  mx,
  mt,
}: ButtonProps) => {
  return (
      <ChakraButton
        alignItems="center"
        px={px}
        py={py}
        my={my}
        mx={mx}
        mt={mt}
        gap=".5rem"
        color="gray.50"
        background="green.500"
        fontSize={fontSize}
        fontWeight="bold"
        textTransform="uppercase"
        transition="0.2s all ease"
        _hover={{ opacity: 0.9 }}
        _active={{ opacity: 0.8 }}
        _focus={{ border: 'none' }}
      >
        {children}
      </ChakraButton>
  )
}

import { Button } from '@chakra-ui/react'

type ButtonProps = {
  children: string
  fontSize: string
  px: string
  py: string
  type: any
  isLoading?: boolean
}

export const SubmitButton = ({
  children,
  px,
  py,
  fontSize,
  type,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      type={type}
      px={px}
      py={py}
      fontSize={fontSize}
      w="100%"
      color="white.50"
      bgColor="green.500"
      transition="0.2s all ease"
      filter="drop-shadow(0px 0px 10px rgba(30, 210, 135, 0.7))"
      _hover={{ bgColor: 'green.600' }}
      _active={{ opacity: 0.9 }}
      _focus={{ boxShadow: 'none' }}
      isLoading={isLoading}
      {...rest}
    >
      {children}
    </Button>
  )
}

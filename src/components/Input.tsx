import { forwardRef, ForwardRefRenderFunction } from   'react'

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error: any
  icon: any
  placeholder: string
  type: string
  stateIcon: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon, type, stateIcon, error = null, ...rest },
  ref
) => {

  return (
    <FormControl isInvalid={!!error} lineHeight="1rem">
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Flex
        flex=".25rem"
        py=".25rem"
        position="relative"
        alignItems="center"
        transition="2s"
      w="100%"
     >
        <Icon
          as={icon}
          position="absolute"
          left="5"
          fontSize="18"
          zIndex="4"
          fill={stateIcon ? 'green.400' : 'gray.300'}
          transition="fill 0.2s ease 0s"
        />
        <ChakraInput
          name={name}
          type={type}
          variant="filled"
          padding="1rem"
          px="2rem"
          pl="12"
          h="4rem"
          w="100%"
          color="gray.50"
          bg="gray.transparent"
          backdropFilter="blur(4px)"
          _hover={{
            bgColor: 'gray.transparent'
          }}
          _focus={{
            bgColor: 'gray.transparent',
            borderColor: 'green.400'
          }}
          _placeholder={{ color: 'gray.300', fontSize: '15' }}
          ref={ref}
          {...rest}
        />
      </Flex>
      {!!error && <FormErrorMessage mt="0">{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)

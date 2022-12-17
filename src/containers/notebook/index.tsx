import { Box, Flex, Image, Link } from '@chakra-ui/react'
import { SolidButton } from '~/components/Buttons/SolidButton'

export const Notebook = () => {
  return (
    <Flex
      justifyContent="center"
      mt={['-8rem', '-12rem', '-22rem']}
      flexDirection="column"
      alignItems="center"
    >
      <Image src="/images/iphone.png" />

      <Link
        href="#mentoria"
        _active={{ textDecoration: 'none' }}
        _hover={{ textDecoration: 'none' }}
      >
        <SolidButton mt="4rem" fontSize="1rem" px="4.5rem" py="1.8rem">
          EU QUERO!
        </SolidButton>
      </Link>
    </Flex>
  )
}

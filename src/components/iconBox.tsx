import { Flex, Image, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface IconBoxProps {
  src: string
  children: ReactNode
}

export const IconBox = ({ src, children }: IconBoxProps) => {
  return (
    <Flex alignItems="center" gap="1rem" maxW={700}>
      <Flex
      textAlign="inherit"
        alignItems="center"
        justifyContent="center"
        minW={12}
        minH={12}
        bgColor="pink.500"
        borderRadius=".5rem"
        transition="0.2s all ease"
        _hover={{ opacity: 0.8 }}
      >
        <Image src={src} />
      </Flex>
      <Text fontSize={["1rem", "1.1rem", "1.2rem"]} fontWeight={500} maxW={500}>
        {children}
      </Text>
    </Flex>
  )
}

import { GridItem as ChakraGridItem, Heading, Text } from '@chakra-ui/react'

interface BonusCardProps {
  title: string
  description: string
}

export const BonusCard = ({ title, description }: BonusCardProps) => {
  return (
    <ChakraGridItem
      w="100%"
      h="100%"
      p={['1rem', '1.2rem', '2rem']}
      mt="2rem"
      gap="2rem"
      maxW={350}
      minH={260}
      flexDirection="column"
      justifyContent="center"
      borderRadius="1rem"
      borderWidth={1}
      borderColor="blue.border"
      bg="linear-gradient(180deg, rgba(52, 58, 66, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)"
      backdropFilter="blur(4px)"
      transition="0.2s all ease"
      boxShadow="0px 0px 8px rgba(30, 156, 210, 0.4)"
      _hover={{ boxShadow: '0px 0px 14px rgba(30, 156, 210, 0.5)' }}
    >
      <Heading mt="1rem" fontWeight={400} fontSize="1.4rem">
        {title}
      </Heading>
      <Text mt="2rem" fontWeight={300} color="gray.300">
        {description}
      </Text>
    </ChakraGridItem>
  )
}

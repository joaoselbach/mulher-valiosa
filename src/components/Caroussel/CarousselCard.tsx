import { Avatar, Flex, Heading, Text } from '@chakra-ui/react'
import { FaQuoteLeft } from 'react-icons/fa'

import { Icon } from '../Icons/Icon'

interface CarousselCardProps {
  name: string
  children: string
  city: string
  src: string
}

export const CarousselCard = ({ name, children, city, src }: CarousselCardProps) => {
  return (
    <Flex
      h="100%"
      bgColor="gray.100"
      w="100%"
      minHeight={400}
      borderRadius="2rem"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column-reverse', 'column-reverse', 'row']}
      gap="2rem"
      py="2rem"
      px={['1rem', '2rem', '6rem']}
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Icon mt="2rem" icon={FaQuoteLeft} />
        <Text
          fontSize="1rem"
          mt="0.2rem"
          lineHeight="1.6rem"
          color="gray.700"
          fontWeight={300}
          maxWidth={600}
        >
          {children}
        </Text>
        <Heading color="gray.800" mt="1rem">
          {name}
        </Heading>
        <Text color="gray.300">{city}</Text>
      </Flex>
      <Avatar w="300px" h="300px" src={src} />
    </Flex>
  )
}

import { Flex, Text } from '@chakra-ui/react'
import { FaCopyright } from 'react-icons/fa'
import { Icon } from './Icons/Icon'

export const Copyright = () => {
  return (
    <Flex bgColor="pink.500"  color="gray.800" flexDirection="column" alignItems="center" justifyContent="center">
      <Text fontSize={[".8rem", "1rem"]} fontWeight="500" display="flex" alignItems="center" gap=".25rem">
        <Icon icon={FaCopyright} /> 2022 - Mulher Valiosa
      </Text>
      <Text fontSize={[".8rem", "1rem"]} color="gray.800">Todos os direitos reservados</Text>
    </Flex>
  )
}

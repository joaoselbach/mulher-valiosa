import { Box, Flex, Text } from '@chakra-ui/react'

interface ModuleNumberProps {
  name: string
  number: string
}

export const Module = ({ number, name }: ModuleNumberProps) => {
  return (
    <Flex
      display="flex"
      alignItems="center"
      fontSize="1.1rem"
      gap="1rem"
      fontWeight={300}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="blue.500"
        fontWeight={700}
        w="50px"
        h="50px"
        borderRadius="50%"
        transition="0.2s all ease"
        filter="drop-shadow(0px 0px 10px rgba(30, 156, 210, 0.4))"
        _hover={{ filter: 'drop-shadow(0px 0px 14px rgba(30, 156, 210, 0.7))' }}
      >
        {number}
      </Box>
      <Text fontSize={[".95rem", "1.1rem", "1rem", ".96rem", "1rem"]} maxW={[250, 500, 250, 200, 200, 300]}>{name}</Text>
    </Flex>
  )
}

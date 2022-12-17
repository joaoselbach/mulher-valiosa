import { Divider, Flex, MenuDivider, Text } from '@chakra-ui/react'

export const BlackCard = () => {
  return (
    <Flex
      h="100%"
      w="100%"
      minHeight={390}
      backgroundImage={['/images/cardBlackMobile.png', '/images/blackCardTablet.png', '/images/blackCard.png']}
      backgroundPosition="cover"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      mt="8rem"
      alignItems="flexStart"
      justifyContent="center"
      flexDirection="column"
      py={['2rem', '2.2rem', '4rem']}
      px={['2rem', '3rem', '8rem']}
    >
      <Divider
        orientation="horizontal"
        w={["10%", "5%", "5%"]}
        borderWidth={2}
        borderRadius="2rem"
        opacity="1"
        borderColor="pink.500"
      />
      <Text color="gray.50" mt="1rem" fontWeight={400} fontSize={["1.2rem", "1.3rem", "1.6rem"]} maxWidth={600}>
        10 encontros de Mentoria em grupo online e ao vivo, semanalmente para te
        orientar de perto e garantir que você está no caminho certo pra chegar
        no relacionamento que merece.
      </Text>
      <Text fontSize="1.4rem" textDecoration="line-through" mt="2rem" color="gray.50">R$4000,00</Text>

    </Flex>
  )
}

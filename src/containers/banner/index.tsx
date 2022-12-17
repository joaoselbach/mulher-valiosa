import { Flex, Heading, Highlight, Text } from '@chakra-ui/react'
import { SolidButton } from '~/components/Buttons/SolidButton'

export const Banner = () => {
  return (
    <Flex
      id="cadastro"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      w="100%"
      h="100%"
      minHeight={['680px', '800px', '1000px']}
      px={['.5rem', '2rem', '2.5rem', '2rem', '6rem', '12rem']}
      pb="1rem"
      pt={['12rem', '14rem', '16rem']}
      gap="1rem"
      overflow="hidden"
    >
      <Heading
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="1.4rem"
        textAlign="center"
        lineHeight={['2.5rem', '3.5rem', '4.4rem']}
        fontWeight={900}
        fontSize={['2rem', '3rem', '3.2rem', '4rem', '4.5rem']}
        color="#fff"
      >
        Conheça o método que leva mulheres solteiras à um relacionamento sério
        em poucos meses
      </Heading>

      <Text
        maxWidth={700}
        textAlign="center"
        fontSize={['1rem', '1.2rem', '1.3rem']}
        fontWeight={400}
        color="gray.200"
        mt="1rem"
        zIndex={2}
      >
        Aprenda como conquistar um relacionamento sério mesmo que você nunca
        tenha namorado ou já esteja cansada de se frustrar com os homens
      </Text>
    </Flex>
  )
}

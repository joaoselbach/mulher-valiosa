import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { IconBox } from '~/components/iconBox'

export const About = () => {
  return (
    <Flex
      alignItems="center"
      gap="1rem"
      justifyContent="center"
      pt="10rem"
      flexDirection={['column', 'column', 'row']}
      px={['1rem', '2rem', '3rem']}
    >
      <Image src="/images/about.png" />
      <Flex flexDirection="column" alignItems="flex-start" gap="4rem">
        <Heading>Quem é Daniela</Heading>
        <Text maxWidth={600}>
          Mentora de relacionamentos, Analista comportamental, Gestora de
          pessoas e Psicóloga. Ajuda mulheres do Brasil e outros países a se
          relacionar com homens de valor e viver um relacionamento sério e
          feliz. Apaixonada por relações e estudo do comportamento humano,
          Daniela transformou a própria vida amorosa ao perceber que não era
          coerente com seus sonhos aceitar pouco e viver relacionamentos
          superficiais.
        </Text>
        <VStack alignItems="flex-start">
          <IconBox src="/images/check.svg">
            Mais de 64 mil seguidores no Instagram.
          </IconBox>
          <IconBox src="/images/check.svg">
            Mais de 2000 mulheres impactadas pelos seus métodos.
          </IconBox>
          <IconBox src="/images/check.svg">
            Realizada com seu relacionamento de mais de 10 anos.
          </IconBox>
        </VStack>
        <Text fontSize="1.1rem" fontWeight={900} color="gray.800">
          Tudo isso só foi possível graças à metodologia criada por ela.
        </Text>
      </Flex>
    </Flex>
  )
}

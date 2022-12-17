import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import { IconBox } from '~/components/iconBox'

export const Content = () => {
  return (
    <Flex
      id="mentoria"
      flexDirection="column"
      py="6rem"
      w="100%"
      px={['1rem', '2rem', '8rem']}
    >
      <Heading
        maxWidth={800}
        textAlign="center"
        alignSelf="center"
        color="gray.800"
        py="4rem"
      >
        A Mentoria Mulher Valiosa tem como base um curso com 3 blocos com aulas
        gravadas e ferramentas que tratam dos temas:
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={['column', 'column', 'row']}
        gap={['6rem', '6rem', '10rem']}
        py="3rem"
      >
        <Flex flexDirection="column" gap="2rem">
          <Text
            fontSize="1.6rem"
            fontWeight={700}
            color="gray.800"
            textAlign={['center', 'center', 'inherit']}
          >
            Mentalidade e postura física
          </Text>
          <IconBox src="/images/heart.svg">
            Você vai descobrir e ressignificar as ideias que te levam à
            relacionamentos superficiais
          </IconBox>
          <IconBox src="/images/heart.svg">
            Identificar quais atitudes suas estão afastando e desconectando os
            homens de você
          </IconBox>
          <IconBox src="/images/heart.svg">
            Mudar esses comportamentos através de hábitos simples no seu dia a
            dia
          </IconBox>
          <IconBox src="/images/heart.svg">
            Se sentir segura pra se expressar, adotar uma nova postura corporal
            e demonstrar seu valor;
          </IconBox>
        </Flex>
        <Image w={['100%', '40%', '30%']} src="/images/firstMobile.png" />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        gap={['6rem', '6rem', '8rem']}
        py="3rem"
      >
        <Image w={['100%', '40%', '40%']} src="/images/secNotebook.png" />
        <Flex flexDirection="column" gap="2rem">
          <Text
            fontSize="1.6rem"
            fontWeight={700}
            color="gray.800"
            maxWidth={550}
            textAlign={['center', 'center', 'inherit']}
          >
            Posicionamento e foco direcionado para os homens certos
          </Text>
          <IconBox src="/images/heart.svg">
            Entender como acontece o processo de atrair, conhecer, ficar e
            chegar ao namoro
          </IconBox>
          <IconBox src="/images/heart.svg">
            Identificar os homens errados e não perder mais tempo com eles
          </IconBox>
          <IconBox src="/images/heart.svg">
            Se colocar com feminilidade, leveza, confiança e saber lidar com
            situações difíceis
          </IconBox>
          <IconBox src="/images/heart.svg">
            Se sentir segura pra conhecer, sair e se conectar com os homens
            compatíveis
          </IconBox>
          <IconBox src="/images/heart.svg">
            Conduzir os encontros para o relacionamento sério sem medo de ser
            rejeitada, deixada ou enganada
          </IconBox>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={['column', 'column', 'row']}
        gap={['2rem', '2rem', '4rem']}
        py="3rem"
      >
        <Flex flexDirection="column" gap="2rem">
          <Text
            fontSize="1.6rem"
            fontWeight={700}
            color="gray.800"
            textAlign={['center', 'center', 'inherit']}
          >
            Habilidades de relacionamento
          </Text>
          <IconBox src="/images/heart.svg">
            Saber lidar com suas emoções e se sentir valorizada pelos homens que
            te conhecem
          </IconBox>
          <IconBox src="/images/heart.svg">
            Evitar interpretações erradas, aprofundar a conexão e permitir que
            as coisas fluam sem ansiedade nem expectativas irreais.
          </IconBox>
          <IconBox src="/images/heart.svg">
            Entenderá melhor como os homens pensam, o que querem e porque agem
            como agem, (sem precisar abrir mão do que você precisa dentro do
            relacionamento)
          </IconBox>
          <IconBox src="/images/heart.svg">
            Vai entender como ser leve, cativante e afetuosa sem ser infantil ou
            dependente;
          </IconBox>
          <IconBox src="/images/heart.svg">
            Saber como manter o vínculo entre vocês de forma natural, sem
            cobrar, implorar nem sofrer
          </IconBox>
          <Text fontSize="1.6rem" textDecoration="line-through" color="gray.800">R$3000,00</Text>
        </Flex>
        <Image  src="/images/thirdNotebook.png" />
      </Flex>
    </Flex>
  )
}

import { Flex, Heading, VStack } from '@chakra-ui/react'
import { FrequentQuestions } from '~/components/Accordion'

export const Faq = () => {
  return (
    <Flex
      h="100%"
      flexDir="column"
      alignItems="center"
      justifyContent="flex-end" 
      py={["6rem", "8rem"]} 
      px={["1rem", "2rem", "3rem"]}
      bgColor="pink.500"
      mt="5rem"
    >
      <Heading color="gray.800">Perguntas frequentes</Heading>
      <VStack mt="5rem">
        <FrequentQuestions title="Como terei acesso ao curso? ">
          Em alguns minutos o login e senha de acesso chegam no email cadastrado
          na hora da compra.
        </FrequentQuestions>
        <FrequentQuestions title="Não consigo participar dos encontros da Mentoria, como acompanhar mesmo assim?">
          A base da Mentoria é o curso gravado, nele todas as instruções e
          ferramentas estão disponíveis pra você quando puder. Os encontros
          serão gravados e disponibilizados semanalmente dentro da plataforma
          também.
        </FrequentQuestions>
        <FrequentQuestions title="E se eu achar que o curso não é pra mim?">
          Você pode pedir o reembolso em até 15 dias após a compra
        </FrequentQuestions>
        <FrequentQuestions title="Não estou saindo ninguém agora, como aplicar o que vou aprender?">
          Todo conteúdo do Curso e da Mentoria foram feitos pra que você consiga
          aplica antes mesmo de conhecer um homem, o que eles vão fazer na sua
          direção é resultado da nova postura que você vai adotar.
        </FrequentQuestions>
        <FrequentQuestions title="Vivo bem sozinha mas gostaria de ter um namorado, o curso vai me ajudar?">
          Sim, ele foi criado pra todas as mulheres que querem se conectar e
          construir um vínculo sólido com o homem certo pra elas, independente
          de onde você está e como se sente agora.
        </FrequentQuestions>
      </VStack>
    </Flex>
  )
}

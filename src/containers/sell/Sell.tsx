import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { FaDiagnoses } from 'react-icons/fa'
import { SolidButton } from '~/components/Buttons/SolidButton'
import { IconBox } from '~/components/iconBox'

export const Sell = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="2rem"
      maxWidth="1000px"
      margin="0 auto"
      borderWidth={1}
      borderColor="gray.200"
      bgColor="#FEFEFE"
      borderRadius="2rem"
      textAlign={['center', 'center', 'inherit']}
      mt={[0, '8rem']}
    >
      <Text fontWeight={900} fontSize="1.5rem" color="gray.800">
        10 encontros de Mentoria + Curso Mulher Valiosa + Bônus
      </Text>
      <Text mt="1rem" fontWeight={700} textAlign="center">
        Tempo de acesso <br /> 1 ano de acesso às aulas gravadas e ao bônus
      </Text>
      <Flex mt="5rem" gap="4rem" flexDirection={['column', 'column', 'row']}>
        <Flex flexDirection="column" alignItems="flex-start" maxWidth={400}>
          <IconBox src="/images/diamond.svg">
            Bônus -{' '}
            <span style={{ textDecoration: 'line-through' }}>R$ 997,00</span>{' '}
          </IconBox>
          <Text mt="1rem">
            Imersão Leve e Feminina para todas as alunas dessa turma- Imersão de
            maturidade emocional e feminilidade
          </Text>
        </Flex>
      </Flex>
      <Box mt="4rem" fontWeight={500} textAlign="center">
        DE{' '}
        <span
          style={{
            textDecoration: 'line-through',
            fontWeight: 900,
            fontSize: '.9rem'
          }}
        >
          R$7997,00
        </span>{' '}
        <br />
        <span style={{ fontWeight: 900 }}>POR APENAS</span> 12x de{' '}
        <span style={{ fontWeight: 900 }}>R$199,31</span> <br /> ou <br />
        <span style={{ fontWeight: 900 }}>R$ 1997,00</span> á vista
      </Box>

      <Link
        href="https://pay.hotmart.com/K26835356H?off=8dt7f5nr"
        _active={{ textDecoration: 'none' }}
        _hover={{ textDecoration: 'none' }}
      >
        <SolidButton mt="3rem" fontSize="1rem" px="3rem" py="1.8rem">
          QUERO GARANTIR MINHA VAGA
        </SolidButton>
      </Link>

      <Image mt="4rem" src="/images/cards.png" />
    </Flex>
  )
}

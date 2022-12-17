import { useRouter } from 'next/router'

import { SolidButton } from '../Buttons/SolidButton'
import { Flex, Image, Box, Text, Link } from '@chakra-ui/react'
import Clock from '../Clock'
import { useEffect, useState } from 'react'

const Header = () => {
  const router = useRouter()

  const [timerDays, setTimerDays] = useState<any>()
  const [timerHours, setTimerHours] = useState<any>()
  const [timerMinutes, setTimerMinutes] = useState<any>()
  const [timerSeconds, setTimerSeconds] = useState<any>()

  let interval

  const startTimer = () => {
    const countDownDate = new Date('Dec, 19,2022 ').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current)
      } else {
        // Update Timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })

  return (
    <Flex
      as="header"
      position="fixed"
      alignItems="center"
      justifyContent="space-between"
      zIndex="99"
      w="100%"
      h="5.5rem"
      gap=".5rem"
      px={['1rem', '4rem', '8rem']}
      boxShadow="0px 8px 15px rgb(0 0 0 / 17%)"
      backdropFilter="blur(2rem)"
      bgColor="#141516"
    >
      <Flex flexDirection={["column", "column", "row"]} alignItems="center" gap={[".2rem", "2rem"]}>
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
        <Text color="pink.500" fontWeight={700}>Para acabar essa oferta!</Text>
      </Flex>

      <Link
        href="https://pay.hotmart.com/K26835356H?off=8dt7f5nr"
        _active={{ textDecoration: 'none' }}
        _hover={{ textDecoration: 'none' }}
      >
        <SolidButton fontSize={['.82rem', '.90rem']} px="1.5rem" py="1.5rem">
          Compre agora
        </SolidButton>
      </Link>
    </Flex>
  )
}

export default Header

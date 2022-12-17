import { Flex } from '@chakra-ui/react'
import React, { Fragment } from 'react'

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <Flex gap=".2rem" color="gray.50">
            <Flex alignItems="center" flexDirection="column">
              <p>{timerDays}</p>
              <small>Days</small>
            </Flex>
            <span>:</span>
            <Flex alignItems="center" flexDirection="column">
              <p>{timerHours}</p>
              <small>Hours</small>
            </Flex>{' '}
            <span>:</span>
            <Flex alignItems="center" flexDirection="column">
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </Flex>{' '}
            <span>:</span>
            <Flex alignItems="center" flexDirection="column">
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </Flex>
          </Flex>
        </section>
      </section>
    </Fragment>
  )
}

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
}

export default Clock

import React from 'react'
import { DateTime } from 'luxon'
import { Container } from '@chakra-ui/react'

const START_YEAR: string = '2024'

const Footer = (): JSX.Element => {
  const curYear = DateTime.now().toFormat('yyyy')
  const isStartYear = curYear === START_YEAR

  return <Container>©️ Ilya Fokin {isStartYear ? START_YEAR : `${START_YEAR} - ${curYear}`}</Container>
}

export default React.memo(Footer)

import React from 'react'
import { DateTime } from 'luxon'
import { Box, Link } from '@chakra-ui/react'

const START_YEAR: string = '2024'

const Footer = (): JSX.Element => {
  const curYear = DateTime.now().toFormat('yyyy')
  const isStartYear = curYear === START_YEAR

  return <Box>©️ <Link href='https://fourking.ru' isExternal>Ilya Fokin</Link> {isStartYear ? START_YEAR : `${START_YEAR} - ${curYear}`}</Box>
}

export default React.memo(Footer)

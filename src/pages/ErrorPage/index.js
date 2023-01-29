import React from 'react'
import Button from '../../components/Button'
import { Container, Title, Img } from './styles'

const gifUrl = 'https://media.giphy.com/media/VwoJkTfZAUBSU/giphy.gif'

export default function ErrorPage () {
  return (
    <Container>
      <Title>Error 404</Title>
      <picture>
        <Img alt='error 404' src={gifUrl} />
      </picture>
      <Button href='/'>Go Home</Button>
    </Container>
  )
}

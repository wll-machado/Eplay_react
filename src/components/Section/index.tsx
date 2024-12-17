import React from 'react'
import { Container } from './styles'
export type Props = {
  title: string
  $background?: 'gray' | 'black'
  children: JSX.Element
}

const Section = ({title, $background,children}:Props) => {
  return (
    <Container $background={$background}>
      <div className="container">
      <h2>{title}</h2>
      {children}
      </div>
    </Container>
  )
}

export default Section

import styled from 'styled-components'
import { CharacterSides } from '../../types/CharacterSides'

type Props = {
  x: number
  y: number
  side: CharacterSides
}

const Character = ({ x, y, side }: Props) => {

  const size = 30
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }

  return (
    <Container
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    >
      
    </Container>
  )
}

const Container = styled.div<{ size: number, left: number, top: number, sidePos: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  background-image: url('/assets/char.png');
  background-position: 0px ${props => props.sidePos}px;
` 

export default Character
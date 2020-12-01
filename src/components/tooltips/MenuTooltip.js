import React from 'react'
import styled from 'styled-components'
import { tooltipData } from '../../data/MenuData'
import MenuButton from '../buttons/MenuButton'

function MenuTooltip({ isOpen }) {
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => {
        return <MenuButton item={item} key={index} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  //display: ${(props) => (props.isOpen ? 'block' : 'none')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen
      ? 'skewY(0deg) rotate(0deg) translateY(0px)'
      : 'skewY(-5deg) rotate(5deg) translateY(-30px)'};
`

export default MenuTooltip

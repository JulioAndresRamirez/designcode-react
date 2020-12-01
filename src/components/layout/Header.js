import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// Components
import MenuButton from '../buttons/MenuButton'
import MenuTooltip from '../tooltips/MenuTooltip'
// Data
import { menuData } from '../../data/MenuData'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleclickOutside)

    return () => {
      document.removeEventListener('mousedown', handleclickOutside)
    }
  }, [])

  function handleclickOutside(e) {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !tooltipRef.current.contains(e.target)
    ) {
      console.log(e)
      setIsOpen(false)
    }
  }

  function handleClick(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === '/account' ? (
            <MenuButton item={item} key={index} handleClick={handleClick} />
          ) : (
            <MenuButton item={item} key={index} />
          ),
        )}
        <HamburguerWrapper>
          <MenuButton
            item={{ title: '', icon: '/images/icons/hamburger.svg', link: '/' }}
          />
        </HamburguerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>{' '}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  gap: 30px;

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburguerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export default Header

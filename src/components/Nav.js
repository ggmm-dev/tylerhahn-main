import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = styled.div`
  font-size: 2em;
  font-family: 'Playfair Display';
`
const Flex = styled.div`
  display: flex;
  width: 90%;
  padding: 20px 0;
  margin: 0 auto;
  justify-content: space-between;
`

const Icon = styled.div`
  margin-right: 13px;
  font-size: 19px;
`

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <Flex>
      <Logo>tyler hahn</Logo>
      <div className='social'>
        <Link to='/'>
          <Icon className='fab fa-instagram' />
          <Icon className='fab fa-dribbble' />
          <Icon className='far fa-envelope' />
        </Link>
      </div>
    </Flex>
  </nav>
)

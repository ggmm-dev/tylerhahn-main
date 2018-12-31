import React from 'react'
import styled from 'styled-components'
import Content from '../components/Content'
import TextHeadline from '../components/TextHeadline'
import Mosaic from '../components/Mosaic'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`

export default ({ fields }) => {
  const { intro } = fields
  return (
    <main className='Home'>
      <Wrapper>
        <TextHeadline width='70%' align='left' subheadline={intro} />
        <Mosaic aData='1' bData='2' cData='3' />
        <Mosaic layout='reverse' aData='1' bData='2' cData='3' />
      </Wrapper>
    </main>
  )
}

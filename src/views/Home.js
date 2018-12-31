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
  const { title, subtitle, featuredImage, body } = fields
  return (
    <main className='Home'>
      <Wrapper>
        <TextHeadline
          width='70%'
          align='left'
          subheadline='Tyler is a multi-discplinary artist specializing in web development, user experience design and brand identity acting as lead developer at GGMM in Milwaukee, WI. Other active projects include One Hot Pod, Portrait Project, and an untitled board game project amongst other things.'
        />
        <Mosaic aData='1' bData='2' cData='3' />
        <Mosaic layout='reverse' aData='1' bData='2' cData='3' />
      </Wrapper>
    </main>
  )
}

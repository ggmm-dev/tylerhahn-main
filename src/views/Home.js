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
  const { intro, aData, bData, cData, dData, eData, fData } = fields
  return (
    <main className='Home'>
      <Wrapper>
        <TextHeadline width='70%' align='left' subheadline={intro} />
        <Mosaic aData={aData} bData={bData} cData={cData} />
        <Mosaic layout='reverse' aData={dData} bData={eData} cData={fData} />
      </Wrapper>
    </main>
  )
}

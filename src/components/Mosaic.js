import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from './devices'

export default class Mosaic extends Component {
  renderMosaic () {
    const Container = styled.div`
      width: 100%;
      height: 75vh;
      margin: 5px 0;
      display: grid;
      grid-gap: 10px;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: ${this.props.layout ? "'a b' 'a c'" : "'b a' 'c a'"};
      @media ${device.laptop} {
        width: 100%;
      }
    `
    const One = styled.div`
      background: gray;
      grid-area: a;
      background-size: cover;
      background-position: center;
      @media ${device.laptop} {
      }
    `

    const Two = styled.div`
      background: gray;
      grid-area: b;
      background-size: cover;
      background-position: center;
      @media ${device.laptop} {
      }
    `
    const Three = styled.div`
      background: gray;
      grid-area: c;
      background-size: cover;
      background-position: center;
      @media ${device.laptop} {
      }
    `
    const props = this.props
    let row = 'row'
    if (props.layout === 'reverse') {
      row = 'row-reverse'
    }
    return (
      <div style={{ flexDirection: row }} className='flex-container'>
        <Container>
          <One style={{ backgroundImage: 'url(' + props.aData + ')' }}>a</One>
          <Two style={{ backgroundImage: 'url(' + props.bData + ')' }}>b</Two>
          <Three style={{ backgroundImage: 'url(' + props.cData + ')' }}>
            c
          </Three>
        </Container>
      </div>
    )
  }
  render () {
    return <div>{this.renderMosaic()}</div>
  }
}

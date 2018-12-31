import React, { Component } from 'react'
import styled from 'styled-components'

export default class TextHeadline extends Component {
  renderSection () {
    const Left = styled.div`
      width: ${this.props.width};
      font-size: 1.75em;
      color: #666;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Roboto';
    `
    const props = this.props
    if (props.align === 'left') {
      return <Left>{this.props.subheadline}</Left>
    }
  }
  render () {
    return <div style={{ padding: '40px 0' }}>{this.renderSection()}</div>
  }
}

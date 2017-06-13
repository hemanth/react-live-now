import React, { Component } from 'react'
import styled from 'styled-components'
import * as polished from 'polished'

import Header from '../components/Header'
import LiveEdit from '../components/LiveEdit'

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: ${polished.rem(1024)};
  padding: ${polished.rem(20)};
  padding-bottom: ${polished.rem(100)};
  text-align: center;
`
const componentClassExample = (`
class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}
`).trim()

class Index extends Component {
  render() {
    return (
      <Container>
        <Header />
        <LiveEdit code={componentClassExample} />
      </Container>
    )
  }
}

export default Index

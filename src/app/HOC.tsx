import React, { Component } from 'react'

const withHello = (WrappedComponent: any) => {
  return class extends Component {
    componentDidMount() {
      console.log("I'm HOC, Hello!")
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withHello

import React, { PureComponent } from 'react'

export class PureCompChild extends PureComponent {
  render() {
    console.log("child")
    return (
      <h1>PureCompChild {this.props.name}</h1>
    )
  }
}

export default PureCompChild
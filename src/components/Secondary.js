// import Bugsnag from '@bugsnag/js'
import React from 'react'

class Secondary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { doARenderError: false }
  }



  render () {
    return (
        <>
      <h1>SECONDARY</h1>
      <SomeComponent someProp={this.state.someotherthing.else}></SomeComponent>
      </>
    )
  }
}

const SomeComponent = () => {
    return (
     <div>Some text</div>
   )
}

export default Secondary

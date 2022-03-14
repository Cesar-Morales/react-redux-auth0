import React, { Component } from 'react'
import Component1 from '../functional/Component1'

import * as ACTION_TYPES from '../store/actions/action_types'
import * as ACTION from '../store/actions/action'

import { connect } from 'react-redux'

export default class Container1 extends Component {
  render() {
    return (
      <>
        <button onClick={}> Get Started</button>
        <button onClick={}> Dispatch Action 1 </button>
        <button onClick={}> Dispatch Action 2 </button>
      </>
    )
  }
}

function mapStateToProps(state){

}

function mapDispatchoToProps(dispatch){

}

export default connect(mapStateToProps, mapDispatchoToProps)(Container1)
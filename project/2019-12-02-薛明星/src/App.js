import React, { Component } from 'react'
import AppTab from './container/AppTab'
import Grate from './container/Grate'
export default class App extends Component {
    render() {
        return (
            <div>
                <Grate/>
                {/* <AppTab/> */}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Grid extends Component {
    render() {
        return (
            <div className='display-flex row'>
                {this.props.children}
            </div>
        )
    }
}
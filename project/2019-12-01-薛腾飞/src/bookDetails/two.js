import React, { Component } from 'react'
export default class Detailbooks extends Component {
    constructor(props) {
        super(props);
        this.state = { totaldata: '' };
    }

    callAPI() {
        fetch("http://localhost:9000/index")
            .then(res => res.text())
            .then(console.log('success'));
    }

    componentWillMount() {
        this.callAPI();
        
    }
    render() {
        return (
            <div id="div" style={{backgroundColor:'white'}}>
                成功

            </div>
            
        )

    }
}

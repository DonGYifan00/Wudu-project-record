import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <DetailBooks/>
//     </div>
//   );
// }
class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = { totaldata: '' };
    }

    callAPI() {
        fetch("http://localhost:9000/textAPI")
            .then(res => res.text())
            .then(res => this.setState({ totaldata: res }));
    }

    componentWillMount() {
        this.callAPI();
        
    }
    render(){
      if (typeof(this.state.totaldata) == 'Object') {
        console.log('ok')
      } else if(typeof(this.state.totaldata) == 'string' && this.state.totaldata != '') {
        var data = JSON.parse(this.state.totaldata)
        console.log(typeof(data))
      }
      return(
        <div id="div" style={{backgroundColor:'white'}}>
                
                {data}

            </div>
      )
    }
}
export default App;

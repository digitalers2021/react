import React from 'react';

export default class Contador extends React.Component {
  constructor(props){
    super(props)
    this.state = {contador: 0}

  }
  render(){
    return (
      <div class="contador">
        <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>
          Incrementar
        </button>
        { this.state.contador }

      </div>
    )
  }

}
import React from 'react';

export default class Link extends React.Component {
  render(){
    return (
    <a href={this.props.url}>{this.props.texto}</a>
    )
  }

}
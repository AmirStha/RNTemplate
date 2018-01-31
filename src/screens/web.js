import React, { Component } from 'react'
import {
  WebView,
  View,
  Text
} from 'react-native'

class Web extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentWillMount(){
  }
  componentDidMount(){}
  componentWillReceiveProps(nextProps){}

  render(){
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    )
  }
}

export default Web
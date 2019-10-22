import React, { Component } from 'react'
import { Dimensions, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },

  listItem: {
    flex: 1,
    borderColor: '#E5E5E5',
    height: (Dimensions.get('window').height - StatusBar.currentHeight) / 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class ColorItem extends Component {
  state = {
    color_hex: '#FFFFFF'
  }

  shuffleColor = () => {
    const color_hex = `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`
    this.setState({ color_hex })
  }

  getBackgroundColor = () => {
    return {
      backgroundColor: this.state.color_hex
    }
  }

  render(){
    return (
      <TouchableOpacity onPress={() => this.shuffleColor()} style={ [ styles.listItem, this.getBackgroundColor() ]}>
        <Text style={styles.text}> 
          {this.state.color_hex} 
        </Text>
      </TouchableOpacity>
    )
  }
}

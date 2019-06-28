// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component{
  
  const { mood } = this.state
  
  state = { 
    mood: "happy"
  }
  
  handleClick = () => {
  const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({
      mood: newMood
    })
  }
  
  render(){
  return (
    <div onClick={handleClick}>{mood}
    </div>)
}

export default SimpleComponent
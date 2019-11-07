import React from 'react'
import './Counter.css'

class Counter extends React.Component {
  state = {
    likes: 0,
  }

  handleThumbClick = () => {
    const newCount = this.state.likes + 1
    this.setState({
      likes: newCount
    })
  }

  render() {
    return (
      <div className='counter'>
        <button
        className='counterBtn'
        onClick={this.handleThumbClick}
        >
          <span role="img" aria-label="thumbs-up"> 👍 </span>
        </button>
        <p>{this.state.likes}</p>
      </div>
    )
  }
}


export default Counter

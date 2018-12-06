import React, { Component } from 'react';
import './App.css';

class Post extends Component {
    render() {
        return (
            <div style= {{backgroundColor: this.props.backgroundColor}}>
            
                <p style={{color: this.props.color}}>{this.props.text}</p>
                <p style={{fontSize: '12px'}}>{this.props.author}</p>
                <p onClick={()=> this.props.turnMeGreen(this.props.id)}>turn me green</p>
            </div>
        );
    }
}


export default Post;

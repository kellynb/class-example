import React, { Component } from 'react';
import './App.css';

class Post extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <p style={{fontSize: '12px'}}>{this.props.author}</p>
            </div>
        );
    }
}


export default Post;

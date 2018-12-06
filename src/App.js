import React, { Component } from 'react';
import './App.css';
import Post from './Post';

class App extends Component {
    state = {
       posts: [
           {id: 0, author: 'Ted',  text: 'today I thought that bacon was so great', time: 'Mon May 28 2018 16:12:25 GMT-0500 (CDT)'},
           {id: 1, author: 'Martha',  text: 'having a great time in spain!', time: 'Wed May 30 2018 08:12:25 GMT-0500 (CDT)'},
           {id: 3, author: 'Mark',  text: 'Just got back from my trip it was great', time: 'Wed May 30 2018 11:59:25 GMT-0500 (CDT)'},
       ],
       postInput: '',
       userNameInput: '',
    };

    handleTextClick(id){
        const posts = this.state.posts.map(post =>{
            if(post.id === id) {
                post.color = 'green'
            }
            return post
        });
        this.setState({posts: posts});
    }

    renderPosts(){
        return this.state.posts.map((post, index) => {
            const description = `${post.author} - ${post.time}`;
            // added in changes to the background based of postion on page.

            if (index == 0) {
                post.backgroundColor = 'red'  
            } else if (index == 1) {
                post.backgroundColor = 'yellow' 
            } else {
                post.backgroundColor= 'green' 
            }

            return (
                <Post text={post.text}
                    author={description}
                    backgroundColor={post.backgroundColor}
                    key={index}
                    id={post.id}
                    color={post.color}
                    turnMeGreen={(id) => this.handleTextClick(id)}
                />
            )
        }).reverse()
    }

    handlePostInputChange(e){
        this.setState({postInput: e.target.value})
    }
    handleUserNameInputChange(e){
        this.setState({userNameInput: e.target.value})
    }

    handleSubmitPost(){
        const newPost = {
            author: this.state.userNameInput,
            text: this.state.postInput,
            id: this.state.posts.length + 1,
            time: new Date()
        };
        const posts = this.state.posts.map(post => post);
        // removed the first post. So there will only be the three most recent posts
        posts.shift();
        posts.push(newPost);
        this.setState({posts, postInput: '', userNameInput: '',})
    }
    

    renderSubmit =() => {
       if (this.state.postInput && this.state.userNameInput) {
           return <button onClick={(e) => this.handleSubmitPost(e)}>Submit post</button>
       }
    };

    render() {
      return (
        <div className="App">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
               <input value={this.state.postInput} onChange={(e) => this.handlePostInputChange(e)} placeholder="write something..."/>
               <input value={this.state.userNameInput} onChange={(e) => this.handleUserNameInputChange(e)} placeholder="username"/>
               {this.renderSubmit()}
            </div>
            {this.renderPosts()}
        </div>
      );
    }
}


export default App;


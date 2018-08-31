import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import chatStore from '../stores/ChatStore'

export default class User extends Component{


    setUid(){
        const user = JSON.parse(localStorage.getItem('user'))
        console.log('d', user.uid.localeCompare(this.props.uid));
        if(user.uid.localeCompare(this.props.uid) === 1){
            chatStore.uid = user.uid + this.props.uid;
        }else{
            chatStore.uid = this.props.uid + user.uid;
        }
    console.log(chatStore.uid);
        chatStore.getAll();
    }

    render(){

        return(
            <div>
                <h1 onClick={() => this.setUid()}>{this.props.username}</h1>
            </div>

        )

    }

}



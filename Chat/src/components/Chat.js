import React, { Component } from 'react';
import { observer } from 'mobx-react'
import userStore from '../stores/UserStore'
import chatStore from '../stores/ChatStore'
import fire from '../config/fire';
import Card from './Card';

@observer
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
        };
    }

    componentDidMount(){
    userStore.user = JSON.parse(localStorage.getItem('user'))
    fire.database().ref("chat/").on('value', snap => {
        chatStore.all_message = [];
        console.log(snap.val());
        snap.forEach(function (child) {
            console.log(child.val())
            chatStore.all_message.push(child.val())
        })

    })
    }

    logout(){
        localStorage.removeItem('user');
    }



    render() {
        return (
            <div className="App">
                {chatStore.all_message &&
                chatStore.all_message.map((msg) => <Card msg={msg.msg} username={msg.username}/>)}
                <input type="text" placeholder="Mesaj" onChange={(evt) => this.setState({msg: evt.target.value})} />
                <button onClick={() => chatStore.sendMessage(this.state.msg)}>Gönder</button>
                <button onClick={() => this.logout()}>Çıkış</button>

            </div>
        );
    }
}



export default Chat;

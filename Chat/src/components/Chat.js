import React, { Component } from 'react';
import { observer } from 'mobx-react'
import userStore from '../stores/UserStore'
import chatStore from '../stores/ChatStore'
import fire from '../config/fire';
import Card from './Card';
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        fire.database().ref("users/").on('value', snap => {
            console.log(snap.val());
            snap.forEach(function (child) {
                console.log("denem",child.val())
                chatStore.all_users.push(child.val())
            })

        })
    }

    logout(){
        localStorage.removeItem('user');
    }



    render() {
        return (
            <div className="container col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <h1>Chat Users</h1>
                    {chatStore.all_users &&
                    chatStore.all_users.map((user) => <User uid={user.uid} username={user.email} />)}
                </div>
                <div className="col-md-6 clearfix">
                {chatStore.all_message &&
                chatStore.all_message.map((msg) =>
                    <Card position={msg.username === userStore.user.email ? 'right' : 'left' } msg={msg.msg} username={msg.username}/>)}

                    <div className="">
                        <input type="text" placeholder="Mesaj" onChange={(evt) => this.setState({msg: evt.target.value})} />
                        <button onClick={() => chatStore.sendMessage(this.state.msg)} className="btn btn-danger">Gönder</button>
                        <button onClick={() => this.logout()}>Çıkış</button>
                    </div>
                    </div>
            </div>
            </div>
        );
    }
}



export default Chat;

import { observable, action, computed } from 'mobx';
import fire from '../config/fire';
import userStore from "./UserStore";



class ChatStore{

    @observable all_message = [];
    @observable all_users = [];
    @observable uid = "";
    @action listener(){

    }



    sendMessage(msg){
        let key = fire.database().ref('chat/').push().key;
        console.log(key);
        fire.database().ref('chat/').child(this.uid).child(key).set({
            msg:msg,
            username:userStore.user.email
        });
    };

    @action getAll(){
        return fire.database().ref("chat/").child(this.uid).on('value', snap => {
            chatStore.all_message = [];
            console.log(snap.val());
            snap.forEach(function (child) {
                console.log("ne",child.val())
                chatStore.all_message.push(child.val())
            })

        })

    }



}

const chatStore = new ChatStore();
export default chatStore;

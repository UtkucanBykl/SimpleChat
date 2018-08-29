import { observable, action, computed } from 'mobx';
import fire from '../config/fire';
import userStore from "./UserStore";



class ChatStore{

    @observable messages = [];
    @observable all_message = [];
    @action listener(){

    }

    sendMessage(msg,){
        let key = fire.database().ref('chat/').push().key;
        console.log(key);
        fire.database().ref('chat/').child(key).set({
            msg:msg,
            username:userStore.user.email
        })
    };

    @computed get allMessage(){
        return;
    }


}

const chatStore = new ChatStore();
export default chatStore;

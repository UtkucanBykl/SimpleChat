import { observable, action, computed } from 'mobx';
import fire from '../config/fire';
import userStore from "./UserStore";



class ChatStore{

    @observable messages = [];
    @observable all_message = [];
    @observable timer = 10;
    @action listener(){

    }

    deleteMessage(key){
        this.interval = setTimeout(() => {
            fire.database().ref("chat").child(key).remove();
        },10000)
    }

    sendMessage(msg){
        let key = fire.database().ref('chat/').push().key;
        console.log(key);
        fire.database().ref('chat/').child(key).set({
            msg:msg,
            username:userStore.user.email
        });
        this.deleteMessage(key);
        this.rTimer();
    };

    @action rTimer(){
        this.timerinterval = setInterval(() => {
            this.timer -= 1;
            if(this.timer < 1){
                clearInterval(this.timerinterval);
            }
        }, 1000);

    }


}

const chatStore = new ChatStore();
export default chatStore;

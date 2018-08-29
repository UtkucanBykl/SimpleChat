import { observable, action } from 'mobx';
import fire from '../config/fire';

class UserStore{
    @observable user = null;
    @observable displayName = '';

    @action signUp(mail, password){
        console.log(mail, password);
        fire.auth().createUserWithEmailAndPassword(mail, password).then(
            (response) => this.user = response.user
        ).catch((err) => console.log(err));
        console.log('f',this.user)
    }

    @action login(mail, password){
        console.log(mail, password);
        fire.auth().signInWithEmailAndPassword(mail, password).then(
            (response) => this.user = response.user
        ).catch((err) => console.log(err))
        console.log(this.user);
    }

}

const userStore = new UserStore();


export default userStore;

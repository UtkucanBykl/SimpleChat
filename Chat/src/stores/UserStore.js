import { observable, action } from 'mobx';
import fire from '../config/fire';

class UserStore{
    @observable user = null;
    @observable displayName = '';

    @action signUp(mail, password) {
        return new Promise((resolve, reject) => {
            console.log(mail, password);
            fire.auth().createUserWithEmailAndPassword(mail, password).then(
                (response) => this.user = response.user
            ).catch((err) => {return reject(err)});
            return resolve(this.user)

        })
    }

    @action login(mail, password) {
        return new Promise((resolve, reject) => {
            fire.auth().signInWithEmailAndPassword(mail, password).then(
                (response) => {
                    this.user=response.user
                    return resolve(response.user)
                }
            ).catch((err) => {return reject(err)});

        })
    }

}

const userStore = new UserStore();


export default userStore;

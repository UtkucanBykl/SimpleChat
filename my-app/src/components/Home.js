import React, { Component } from 'react';
import { observer } from 'mobx-react'
import userStore from '../stores/UserStore'

@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email:'',
            password:'',
            new_email: '',
            new_password: '',
            test:''
        };
    }

    componentWillMount(){
        console.log('utku',JSON.parse(localStorage.getItem('user')));
        userStore.user = JSON.parse(localStorage.getItem('user'));
    }

    login(){
        userStore.login(this.state.email, this.state.password);
        localStorage.setItem('user', JSON.stringify(userStore.user))
    }

    signup(){
        userStore.signUp(this.state.new_email, this.state.new_password);
        console.log(userStore.user)
    }


    render() {
        return (
            <div className="App">
                {userStore.user && userStore.user.email}
                <input type="text" placeholder="Email" onChange={(text) => this.setState({email:text.target.value})} />
                <input type="password" placeholder="password" onChange={(text) => this.setState({password:text.target.value})} />
                <button onClick={() => this.login()}>loginr</button>
                <br /><br />
                <input type="text" placeholder="Email" onChange={(text) => this.setState({new_email:text.target.value})} />
                <input type="password" placeholder="password" onChange={(text) => this.setState({new_password:text.target.value})} />
                <button onClick={() => this.signup()}>signup</button>
            </div>
        );
    }
}



export default Home;

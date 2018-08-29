import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import Chat from './components/Chat'

class App extends Component {




  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/chat' component={Chat}/>

            </Switch>
        </BrowserRouter>

    );
  }
}



export default App;

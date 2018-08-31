import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Card extends Component{

    leftMessage(){
        return(
            <div className="card text-white bg-info  float-right" style={style.leftStyle}>
                <div className="card-header">{this.props.username}</div>
                <div className="card-body">
                    <p className="card-text">{this.props.msg}</p>
                    </div>
            </div>
        )
    }

    rightMessage(){
        return(
            <div className="card text-white bg-success float-left" style={style.leftStyle}>
                <div className="card-header">{this.props.username}</div>
                <div className="card-body">
                    <p className="card-text">{this.props.msg}</p>
                </div>
            </div>
        )
    }

    render(){

        return(
            <div className="col-md-6">
            {this.props.position === "right" ? this.rightMessage(): this.leftMessage()}
            </div>


        )

    }

}

const style = {
    leftStyle:{
        width: 250,
    },
    rightStyle:{
        width: 250
    }

};

import React, { Component } from 'react';


export default class Card extends Component{

    leftMessage(){
        return(
            <div style={style.leftStyle}>
                <h4>
                    {this.props.msg}
                </h4>
                <span>{this.props.username}</span>
            </div>
        )
    }

    rightMessage(){
        return(
            <div style={style.rightStyle}>
                <h4>
                    {this.props.msg}
                </h4>
                <span>{this.props.username}</span>
            </div>
        )
    }

    render(){

        return(
            <div>
            {this.props.position === "right" ? this.rightMessage(): this.leftMessage()}
            </div>
        )

    }

}

const style = {
    leftStyle:{
        borderBottomRightRadius: 25,
        backgroundColor: '#ef4567',
        width: 250,
    },
    rightStyle:{
        marginLeft: 250,
        borderBottomRightRadius: 25,
        backgroundColor: '#ef4567',
        width: 250
    }

};

import React, { Component } from 'react';


export default class Card extends Component{


    render(){

        return(
            <div style={style.divStyle}>
                <h4>
                    {this.props.msg}
                </h4>
                <span>{this.props.username}</span>
            </div>

        )

    }

}

const style = {
    divStyle:{
        borderBottomRightRadius: 25,
        backgroundColor: '#ef4567',
    }

};

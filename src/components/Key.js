import React from "react";
//import { useState } from 'react';
import './Key.css';


class Key extends React.Component {

    noteIsFlat = (note) => {
        return note.length>2;
    }
    handleClick = () => {
        this.props.keyNote(this.props.note);
        this.forceUpdate();
    }
    render() {
        
        let keyClassName="key";
        
        const noteIsFlat = this.noteIsFlat(this.props.note);
        if (noteIsFlat) {
            keyClassName += " flat";
        }
        let key;
        if(noteIsFlat)  {
            key = (
            <div className={keyClassName} onClick={this.handleClick}></div>);
        }
        else {
            key = (<div className= {keyClassName} onClick={this.handleClick}>
                        <div className="key-text">
                            {this.props.note.toUpperCase()}
                        </div>
                    </div>);
        }
        return key;
    }
}
export {Key}
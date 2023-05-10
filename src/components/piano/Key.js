import React, { useEffect } from "react";
import './Key.css';


class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['white', '#2EC4B6'],
            isFlat: false,
            isClicked: false
        };
    }

    //create a synth and connect it to the main output (your speakers)
    noteIsFlat = (note) => {
        return note.length>2;
    }
    handleClick = (e, keyNote) => {
        
        this.props.keyNote(this.props.note);
        const note =this.props.note;
        this.setState({isClicked: !this.state.isClicked});

        console.log(this.props.keysPressed);
        this.props.updateKeysPressed([note]);
        
    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.keyPressed !== prevProps.keyPressed){}
    // }

    render() {
        
        let keyClassName="key";
        const noteIsFlat = this.noteIsFlat(this.props.note);
        const keyNote = this.props.note;
        const keyPressed = this.props.keyPressed;
        if (noteIsFlat) {
            keyClassName += " flat";
        }
        let key;
        if(noteIsFlat)  {
            key = (
            <div className={keyClassName} style={keyPressed ? { backgroundColor: '#089184'} : { backgroundColor: '#2EC4B6'}} onClick={e => this.handleClick(e, keyNote)}></div>);
        }
        else {
            key = (<div className= {keyClassName} style = {keyPressed ? {backgroundColor: '#CBF3F0'} : {backgroundColor: "white"}} onClick={e => this.handleClick(e, keyNote)}>
                        <div className="key-text">
                            {/*this.props.note.toUpperCase()*/}
                        </div>
                    </div>);
        }
        return key;
    }
}
export {Key}
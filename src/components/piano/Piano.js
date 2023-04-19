import React from 'react';
import _ from 'lodash';
import {Key} from './Key.js';
import Graph from '../graph/Graph';
import './Piano.css';
import {NOTES} from './notes.js';

class Piano extends React.Component {
    state = {keyPressed: 'No note played yet'}
    
    handleChildVar = (keyNote, clicked) => {
        this.setState({
            keyPressed: keyNote
        });
        console.log(keyNote);
        /*var thenote=this.state.isClicked;
        console.log(thenote);*/
    }
    render() {
        const keys = _.map(NOTES,(note,index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    keyNote={this.handleChildVar}
                />
            );
        });
        <Graph>
            keyNote={this.handleChildVar}
        </Graph>
        return(
            <div className="piano">
               {keys}
            </div>
        );

    }
}
export {Piano}



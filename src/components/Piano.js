import React from 'react';
import _ from 'lodash';
import {Key} from './Key.js';
import './Piano.css';
import {NOTES} from './constants';

class Piano extends React.Component {
    state = {keyPressed: 'No note played yet'}
    handleChildVar = (keyNote) => {
        this.setState({keyPressed: keyNote});
        var thenote=this.state.keyPressed;
        console.log({thenote});
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
        return(
            <div>
                <h1> 
                    {this.state.keyPressed.toUpperCase()}
                </h1>
            <div className="piano">
                
               {keys}
            </div>
            </div>
        );

    }
}
export {Piano}



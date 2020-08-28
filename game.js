import React from 'react';import './game.css';
import { render } from '@testing-library/react';

const CELLSIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Game extends React.Component {
    render() {
        return ( 
            <div>
                <div classNAme="Board" style={{"width: WIDTH, height: HEIGHT"}}>
                </div>
            </div>
        )
    }
}

export default Game
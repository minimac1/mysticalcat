import React, { useState } from 'react'
import logo from './logo.svg';
import {FirstCat} from './Cats'

/*export class SirstBackground extends React.Component {

    handleClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.clientX)
        console.log(this.props.children)
    }
    
    render = () =>{
        //const primary = new SirstCat({name:"primary"})
        return (
            <div className="App-body" onClick={this.handleClick}>
                <div className="App-shelf">
                <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="App-cat">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                </div>
                <SirstCat />
            </div>
        )
    }
}*/
export const FirstBackground: React.FC<any> = ( ) => {
    // maybe bind the manual cat and others are auto?
    //const cat = catGen()
    const [state, setstate] = useState({primaryx: 0, primaryy:0});
    
    const next = () => {
        
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        // console.log(event.clientX)
        // console.log(event.clientY)
        // client Y is from the top so lets get window height - clienty to pass through
        setstate({primaryx:event.clientX, primaryy:event.clientY});
        //console.log(state.primaryx);
    }
    //const primaryc = FirstCat({name:"primary", x:state.primaryx, y:state.primaryy})
    const body = (
        <div className="App-body" onClick={handleClick}>
            <div className="App-shelf">
            </div>
            <FirstCat name="primary" x={state.primaryx} y={state.primaryy}/>
        </div>
    )
    

    return body
}

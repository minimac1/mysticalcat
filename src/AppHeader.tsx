import React from 'react'

function temp(){

}
export default function AppHeader() {
    return (
        <header className="App-header">
            <div className="Title"><a href="/home">Mythical Cat Test</a></div>
            <div className="Open-menu">
            
            <a href="/Updates" className="No"><button onClick={temp}>Changelog</button></a>
            </div>
        </header>
    )
}

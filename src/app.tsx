import * as React from 'react';
import ReactDOM from 'react-dom/client';


import { App } from './App_02';


function render() : void {
    const root = ReactDOM.createRoot(document.getElementById('app'));
    root.render(<App />);
}

render();

import * as React from 'react';


export function App() : JSX.Element {
    return (<>
        <h1>Hello World!</h1>
        <div style={{ width: 250, margin: 10, padding: 15, border: 2, borderColor: '#009900', borderStyle: 'solid' }} >
            <img src="https://analysiscenter.github.io/images/qb.jpg" width={200} />
            <input defaultValue={'some string'} /><br />
            <button onClick={() => alert('Attention')} style={{ marginTop: 10 }}>OK</button>
        </div>
    </>);
}

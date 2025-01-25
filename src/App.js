// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
















// import React, { useEffect } from 'react';
// import io from 'socket.io-client';

// const App = () => {
//     useEffect(() => {
//         const socket = io('http://localhost:5000');

//         socket.on('connect', () => {
//             console.log('Connected to server');
//             socket.send('Hello from React!');
//         });

//         socket.on('message', (msg) => {
//             console.log('Message from server: ' + msg);
//         });

//         return () => socket.disconnect();
//     }, []);

//     return (
//         <div>
//             <h1>React Socket.IO</h1>
//         </div>
//     );
// };

// export default App;












// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const App = () => {
//     const [number, setNumber] = useState(null);

//     useEffect(() => {
//         const socket = io('http://localhost:5000');

//         socket.on('connect', () => {
//             console.log('Connected to server');
//         });

//         socket.on('operadores_logados', (data) => {
//             console.log('Random number from server: ' + data.number);
//             setNumber(data.number);
//         });

//         return () => socket.disconnect();
//     }, []);

//     return (
//         <div>
//             <h1>React Socket.IO</h1>
//             <p>Random Number: {number}</p>
//         </div>
//     );
// };

// export default App;














// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const App = () => {
//     const [number, setNumber] = useState(null);

//     useEffect(() => {
//         const socket = io('http://localhost:5000');

//         socket.on('connect', () => {
//             console.log('Connected to server');
//         });

//         socket.on('operadores_logados', (data) => {
//             console.log('Random number from server: ' + data.number);
//             setNumber(data.number);
//         });

//         return () => socket.disconnect();
//     }, []);

//     return (
//         <div>
//             <h1>React Socket.IO</h1>
//             <p>Random Number: {number}</p>
//         </div>
//     );
// };

// export default App;






















// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const App = () => {
//     const [number, setNumber] = useState(null);

//     useEffect(() => {
//         const socket = io('http://localhost:5000');

//         socket.on('connect', () => {
//             console.log('Connected to server');
//         });

//         socket.on('operadores_logados', (data) => {
//             console.log('Random number from server: ' + data.number);
//             setNumber(data.number);
//         });

//         return () => socket.disconnect();
//     }, []);

//     return (
//         <div>
//             <h1>React Socket.IO</h1>
//             <p>Random Number: {number}</p>
//         </div>
//     );
// };

// export default App;












import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const App = () => {
    const [number, setNumber] = useState(null);

    useEffect(() => {
        // const socket = io('http://localhost:5000');
        const socket = io('http://172.20.20.49:5020');

        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('operadores_logados', (data) => {
            console.log('Operadores Logados: ' + data.operadores_logados);
            setNumber(data.operadores_logados); // Atualiza o estado com o número recebido
        });

        return () => socket.disconnect();
    }, []);

    console.log('Operadores Logados:', number); // Log para verificar o render

    return (
        <div>
            <h1>React Socket.IO</h1>
            <p>Operadores Logados: {number}</p> {/* Exibe o número atual */}
        </div>
    );
};

export default App;










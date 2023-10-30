import React from 'react';
import { ChakraProvider  } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
   <ChakraProvider>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
)

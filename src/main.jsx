import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './Context/Authcontext'
ReactDOM.createRoot(document.getElementById('root')).render(


  <ChakraBaseProvider> 
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
      
    

  </ChakraBaseProvider>

)

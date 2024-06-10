import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ClerkProvider} from "@clerk/clerk-react";


const PUB_KEY:string=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUB_KEY){
    throw new Error("Missing Publishable key")
}




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUB_KEY}>
        <App />
    </ClerkProvider>
  </React.StrictMode>,
)
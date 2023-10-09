import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './contexts/ApiContext';
import AnimatedSpriteProvider from './contexts/AnimatedSpriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ApiProvider>
        <AnimatedSpriteProvider>
          <App />
        </AnimatedSpriteProvider>
    </ApiProvider>
    
  </React.StrictMode>
);

reportWebVitals();
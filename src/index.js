import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './contexts/ApiContext';
import AnimatedSpriteProvider from './contexts/AnimatedSpriteContext';
import PokemonProvider from './contexts/PokemonContext';
import GuessProvider from './contexts/GuessContext';
import ScoreProvider from './contexts/ScoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>

    <ApiProvider>
        <AnimatedSpriteProvider>
          <PokemonProvider>
            <GuessProvider>
              <ScoreProvider>
                <App />
              </ScoreProvider>
            </GuessProvider>
          </PokemonProvider>
        </AnimatedSpriteProvider>
    </ApiProvider>
    
  //</React.StrictMode>
);

reportWebVitals();
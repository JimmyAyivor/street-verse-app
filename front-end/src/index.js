import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// back2Top Code
const back2Top = document.querySelector('#back2Top');


// back2Top Code
back2Top.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: 'smooth' })
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY >= 400) {
    back2Top.classList.remove('hidden');
    back2Top.classList.add('block');
  } else {
    back2Top.classList.add('hidden');
    back2Top.classList.remove('block');
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


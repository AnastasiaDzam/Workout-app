import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======

import './assets/styles/index.scss'
import Router from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
>>>>>>> 6ba7f4a (added router dom)
)

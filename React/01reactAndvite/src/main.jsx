import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactAnchor = React.createElement(
  // tag, attribute in object , text
  "a",{href:"htts://google.com",target:"_blank"},"go to google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App/>
    {reactAnchor}
    </>
)

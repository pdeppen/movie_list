import React, { Component } from 'react'

// components
import AppNavbar from './components/AppNavbar'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    )
  }
}

export default App

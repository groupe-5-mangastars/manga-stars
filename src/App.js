import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import logo from './logo.png';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Auth/AuthProvider';
import Router from './Router';




class App extends Component {
  render() {
    return (
      <div>
        <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Router />

        <Footer />
        </BrowserRouter>
        </AuthProvider>
      </div>
    )
  }
}
export default App
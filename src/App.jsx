import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import React, { useEffect } from 'react';
import { getUserAuth } from './Actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect (() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/home' element={<React.Fragment><Header /> 
          <Home /></React.Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{}
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

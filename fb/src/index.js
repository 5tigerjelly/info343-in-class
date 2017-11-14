import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var config = {
    apiKey: "AIzaSyB3mWHftxW9AwslE0yXgHGKiG9NVotDNQI",
    authDomain: "info343-cfdd0.firebaseapp.com",
    databaseURL: "https://info343-cfdd0.firebaseio.com",
    projectId: "info343-cfdd0",
    storageBucket: "info343-cfdd0.appspot.com",
    messagingSenderId: "73706306035"
  };
  //firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
import './App.css';
import React from 'react';
import Pyramid from './components/Pyramid';
import Navbar from './components/Navbar';
import CodeSubmission from './components/CodeSubmission';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router} from '@reach/router';


function App() {
  
      return (
        <div className="App">
          <Navbar/>
          <Router>
            <Pyramid path="/"/>
            <CodeSubmission path="codesubmission"/>
            <Products path="products"/>


          </Router>


        </div>
      );
      
}

export default App;

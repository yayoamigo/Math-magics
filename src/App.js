import React, { PureComponent } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Quote from './pages/Quotes';

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
const user = useSelector()

  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />

        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}
export default App;

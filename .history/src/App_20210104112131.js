import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {selectUser} from './features/userSlice';
import Feed from './Feed';
import {auth} from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
      } else {
        //user logged out
        dis
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />

          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}
export default App;

import {Route, Routes} from "react-router-dom";
import {Header} from "./Header/Header";
import {User} from "./Users/User";
import {FC, useEffect} from "react";
import {getUsers} from "../redux/Users/UsersSlice";


export const App:FC = () => {

    useEffect(():void => {
        (getUsers());
    }, []);


  return (
      <div className="App">
          <Header/>
          <Routes>
              <Route path="/usersSlice" element={<User />}/>
          </Routes>

      </div>
  )
}
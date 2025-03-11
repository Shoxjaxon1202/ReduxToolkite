import "./App.css";
import NewsList from "./components/NewsList";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { fetchedNews, getUsers } from "./redux/features/newsSlice";
import { loaded, loading } from "./redux/features/loaderSlice";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Avatar from "./components/Avatar";
import Register from "./components/Registration";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(loading());
    axios.get(`http://localhost:5000/news`).then((res) => {
      dispatch(fetchedNews(res.data));
      dispatch(loaded());
    });
  }, []);

  const [regDisplay, setRegDisplay] = useState(false);

  const handleRegDisplay = (org) =>{
    setRegDisplay(org)
  }
  // console.log(store);

  if(!store.auth.isAuth){
    return !regDisplay ? <Login handleRegDisplay={handleRegDisplay}/> : <Register handleRegDisplay={handleRegDisplay}/>
  }
  return (
    <div className="App">
      <NewsList />
      <Avatar/>
      <Form />
      <Logout/>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Components/Feed";
import Connection from "./Components/Connections";
import Request from "./Components/Request";
import Signup from "./Components/Signup";

const App = () => {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connection />} />
            <Route path="/requests" element={<Request/>} />
            <Route path="/signup" element={<Signup/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
     
    </>
  );
};

export default App;

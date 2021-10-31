import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import About from './Pages/About/About';
import Address from './Pages/Address/Address';
import Booking from './Pages/Booking/Booking/Booking';
import Header from './Pages/Headers/Header';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ManageService from './Pages/Home/ManageServices/ManageService';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/manageServices">
            <ManageService></ManageService>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>

          <Route path='/address'>
            <Address></Address>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

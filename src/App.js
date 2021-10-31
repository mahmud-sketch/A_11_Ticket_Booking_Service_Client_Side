import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header';
import Rides from './Rides/Rides';
import RideDetails from './RideDetails/RideDetails';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyRides from './MyRides/MyRides';
import ManageAllRides from './ManageAllRides/ManageAllRides';
import AddNewRide from './AddNewRide/AddNewRide';
import UpdateOrder from './UpdateOrder/UpdateOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/rides'>
              <Rides></Rides>
            </Route>
            <PrivateRoute path='/details/:id'>
              <RideDetails></RideDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/myRides'>
              <MyRides></MyRides>
            </Route>
            <Route path='/manageAllRides'>
              <ManageAllRides></ManageAllRides>
            </Route>
            <Route path='/addNewRide'>
              <AddNewRide></AddNewRide>
            </Route>
            <Route path='/update/:id'>
              <UpdateOrder></UpdateOrder>
            </Route>
            <Route path='/*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import HomeComponent from './home/HomeComponent'; // UserComponent를 import
import HotelList from './home/HotelList';
import HotelShowOne from './home/HotelShowOne';
import AdminshowUserOne from "./admin/AdminshowUserOne";
import AdminShowUserList from "./admin/AdminShowUserList";
import BasketByUser from './basket/BasketByUser';
function AppRoutes() {
    const routes = [
        { path: "/", element: <HomeComponent /> },
        { path: "/hotelHome", element: <HotelList /> },
        { path: "/hotelone/:id", element: <HotelShowOne /> },
        { path: "/admin/users", element: <AdminShowUserList /> },
        { path: "/admin/user/:id", element: <AdminshowUserOne /> },
        { path: "/user/basket/:userid", element: <BasketByUser /> }
    ];
    return useRoutes(routes);
}
function App() {
    return (
        <Router>
            <div className="App">
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Auth from "./user/Auth";
import ShowOne from "./hotel/ShowOne";
import ShowList from "./hotel/ShowList";
import Write from "./hotel/Write";
import Update from "./hotel/Update";
import AdminShowUserList from "./admin/AdminShowUserList";
import AdminshowUserOne from "./admin/AdminshowUserOne";
import BasketByUser from "./basket/BasketByUser";
import MyBasket from "./user/MyBasket";


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/hotel/showOne/:id" element={<ShowOne />} />
                <Route path="/hotel/showList/:pageNo" element={<ShowList />} />
                <Route path="/hotel/write" element={<Write />} />
                <Route path="/hotel/update/:id" element={<Update />} />

                {/*<Route path="/hotel/showList/:id" element={<ShowList />} />*/}
                {/*<Route path="/hotelone/:id" element={<HotelShowOne />} />*/}
                <Route path="/admin/users" element={<AdminShowUserList />} />
                <Route path="/admin/user/:id" element={<AdminshowUserOne />} />
                <Route path="/user/basket/:userid" element={<BasketByUser />} />
                <Route path="/user/mypage/:userid" element={<MyBasket/>} />
            </Routes>
        </div>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";
import App from './App';
import Attendance from './pages/attendance/attendance.jsx';
import FormConfirmation from "./pages/formNoVoucher/formNoVoucher.jsx";
import FormConfirmationDiscount from "./pages/formVoucher/formVoucher.jsx";


const AllRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/attendance' element={<Attendance />} />
                <Route path="/form-confirmation" element={<FormConfirmation />} />
                <Route path="/form-confirmation-event" element={<FormConfirmationDiscount />} />
            </Routes>
    )
}

export default AllRoutes
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ValidateToken from './validateToken'

const PrivateRoute = ({ children }) => {

    let token = useSelector((state) => state.auth.userToken)
    if (token === '' || token === null) {
        token = sessionStorage.getItem("token"); 
    }
    if (token === '' || token === null) {
        return <Navigate to="/login" />;
    }
    if (ValidateToken(token)) {
        return children
    } else {
        return <Navigate to="/login" />;
    }
    ;
};

export default PrivateRoute;

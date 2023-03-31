import axios from "axios"
import { isExpired } from "react-jwt";
import { setLogin, setLoginDate } from "../Slices/AuthSlice";
import { setAccounts } from "../Slices/AccountsSlice";
import { useDispatch, useSelector } from "react-redux";
import AccountsHelper from "./AccountsHelper";

const ValidateToken = (token) => {

    const { url } = useSelector(state => state.api)

    const config = {
        headers: {
            "auth-token": token
        }
    }
    const dispatch = useDispatch();
    
    if(token === '' || token === null || token === undefined){
        return false;
    } else if(isExpired(token)){
        return false;
    } else {
        return axios.post(url + '/auth/validate', {}, config).then(res => {
            if (res.status === 200) { 
                dispatch(setLogin(res.data.login));
                dispatch(setLoginDate(res.data.login.date));
                dispatch(setAccounts(AccountsHelper(res.data.accounts)));
                
                return true;
            } else {
                return false;
            }
        })
    }
    
}


export default ValidateToken;
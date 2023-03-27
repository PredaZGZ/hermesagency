import axios from "axios"
import { isExpired } from "react-jwt";
import { setLogin } from "../Slices/AuthSlice";
import { setAccounts } from "../Slices/AccountsSlice";
import { useDispatch } from "react-redux";
import AccountsHelper from "./AccountsHelper";


const ValidateToken = (token) => {
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
        return axios.post('http://localhost:4000/auth/validate', {}, config).then(res => {
            if (res.status === 200) { 
                dispatch(setLogin(res.data.login));
                dispatch(setAccounts(AccountsHelper(res.data.accounts)));
                
                return true;
            } else {
                return false;
            }
        })
    }
    
}


export default ValidateToken;
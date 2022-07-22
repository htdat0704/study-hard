import { Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";

const ProtectedRoute = ({component: Component}) =>{
    const {state: {authLoading, isAuthenticated}} =  useContext(AuthContext);

    if(authLoading){
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant='info' />
            </div>
        )
    }

    return ( 
        <Route element={<Component />} />
    )
}

export default ProtectedRoute
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { deleteToken, getToken } from "../helpers/myfunc";
import { useLocation, useNavigate } from "react-router-dom";

function AuthProvider({ children }: any) {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const is_auth = deleteToken();
        if (!is_auth) {
            console.log("User not authenticate");
            navigate("/")
        }
        setInterval(() => {
            const token = getToken();
            if (token == null) {
                console.log("User not authenticate");
                navigate("/");
            }
            setIsLoading(false);
        }, 1000);
    }, []);


    return (
        <>
            <Loading isLoading={isLoading} children={children} />
        </>
    );
}

export default AuthProvider;
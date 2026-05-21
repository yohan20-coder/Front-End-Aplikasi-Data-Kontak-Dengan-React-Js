import { useNavigate } from "react-router";
import { useEffectOnce, useLocalStorage } from "react-use";
import { userLogout } from "../../lib/api/UserApi.js";
import { alertSuccess, alertError } from "../../lib/alert.js";

export default function UserLogout() {

    const [token, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    async function handleLogout() {
        const response = await userLogout(token);
        const responseBody = await response.json();
        if (response.status === 200) {
            setToken("");
            // await alertSuccess('Logout successful');
            navigate({
                pathname: "/login"
            });
        } else {
            await alertError(responseBody.errors);
        }
    }

    useEffectOnce(() => {
        handleLogout()
         .then(() => {
            console.log("User Logout successful");
        })
    });

    return (
        <>
        </>
    )
}
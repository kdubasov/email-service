import {useSelector} from "react-redux";

//получаем инофрмацию о зареганом пользователе из стора
export const useAuth = () => {
    const {email,token,id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}
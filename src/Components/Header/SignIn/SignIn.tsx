import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { urlGetClientByLoginAndPassword } from "../../../Api/Api";
import { signUserAction } from "../../../Redux/Reducers/SignReduser";
import { AuthTypes } from "../../../Utils/DataTypes/AuthData";
import { DoPostFetch } from "../../../Utils/QueryHandlers/FetchToServer";
import s from './SignIn.module.css';

export const SignIn = () => {
    const dispatch = useDispatch();

    const [login, setLogin] = useState<string | null>('');
    const [password, setPassword] = useState<string | null>('');

    const signHandler = (data:any): void => {
        if(data === 'bad')
            console.log("Request is bad");
        else{
            console.log("Request is success");
            //localStorage.setItem('userData', JSON.stringify(data));
            dispatch(signUserAction(data));
        }
    }

    return (
        <div>
            <TextInput placeholder="Введите логин" label="Логин" value={`${login}`} onChange={(e) => setLogin(e.currentTarget.value)} />
            <TextInput placeholder="Введите пароль" label="Пароль" value={`${password}`} onChange={(e) => setPassword(e.currentTarget.value)}/>
            <div className={s.outterContainerBtn}>
                <Button color="indigo" className={`${s.btnRegistr}`}>Зарегестрироваться</Button>
            </div>
            <div className={s.outterContainerBtn}>
                <Button color="indigo" className={s.btnSign} 
                    onClick={() => {
                        const paramObj: AuthTypes = {
                            login: login,
                            password: password
                        }
                        DoPostFetch(urlGetClientByLoginAndPassword(), signHandler, paramObj)}}>
                    Войти
                </Button>
            </div>
        </div>
    );
}
import { Button, TextInput } from "@mantine/core";
import { useState } from "react";
import s from './SignIn.module.css';

export const SignIn = () => {
    const [login, setLogin] = useState<string | null>('');
    const [password, setPassword] = useState<string | null>('');

    return (
        <div>
            <TextInput placeholder="Введите логин" label="Логин" value={`${login}`} onChange={(e) => setLogin(e.currentTarget.value)} />
            <TextInput placeholder="Введите пароль" label="Пароль" value={`${password}`} onChange={(e) => setPassword(e.currentTarget.value)}/>
            <div className={s.outterContainerBtn}>
                <Button color="indigo" className={`${s.btnRegistr}`}>Зарегестрироваться</Button>
            </div>
            <div className={s.outterContainerBtn}>
                <Button color="indigo" className={s.btnSign}>Войти</Button>
            </div>
        </div>
    );
}
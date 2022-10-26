import React, { useState } from "react";
import s from './Discription.module.css';
import { Button } from '@mantine/core';
import { log } from "console";


const Discription = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin(e:React.FormEvent<HTMLInputElement>): void{
        setLogin(e.currentTarget.value);
    }

    function handlePassword(e: React.FormEvent<HTMLInputElement>){
        setPassword(e.currentTarget.value);
    }

    return(
        <div className={s.outterContainerDisc}>
            <h1>Прокат автомобилей</h1>
            <div className={s.commonContiner}>
                <div>
                    <h2>+ Автомобили без залога</h2>
                    <h2>+ Все автомобили застрахованы</h2>
                    <h2>+ Подача авто</h2>
                    <h2>+ Большой атвопарк</h2>
                    <h2>+ Акции</h2>
                    <h2>+ Круглосуточная поддержка</h2>
                </div>
                <div>
                    <table className={s.tableForm}>
                        <tr>
                            <td>Логин</td>
                            <td><input type="text" onChange={handleLogin}/></td>
                        </tr>
                        <tr>
                            <td>Пароль</td>
                            <td><input type="text" onChange={handlePassword}/></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>
                                Запомнить меня
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className={s.frogetPass}>Забыл пароль</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button>Войти</Button>
                            </td>
                            <td>
                                <Button>Зарегестрироваться</Button>                                
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Discription;
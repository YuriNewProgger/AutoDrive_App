import React from "react";
import ford from '../../../Assets/ford.jpg';
import dodge from '../../../Assets/dodge.jpg';
import porche from '../../../Assets/porche.jpg';
import s from './Discription.module.css';
import { Button } from '@mantine/core';


const Discription = () => {
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
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Пароль</td>
                            <td><input type="text" /></td>
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
                                <a href="#">Забыл пароль</a>
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
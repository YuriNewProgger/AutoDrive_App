import React from "react";
import s from './Body.module.css';
import Discription from "./Discription/Discriprion";


const Content = () => {
    return(
        <div className={s.outterContainer}>
            <div className={s.innerContainer}>
                <Discription/>
            </div>
        </div>
    );
}

export default Content;
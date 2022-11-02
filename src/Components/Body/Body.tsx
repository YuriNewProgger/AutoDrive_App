import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About/About";
import s from './Body.module.css';
import { Catalog } from "./Catalog/Catalog";
import { Contact } from "./Contacts/Contact";
import Discription from "./Discription/Discriprion";


export const Content = () => {
    return(
        <div className={s.outterContainer}>
            <div className={s.innerContainer}>
                {/* <Discription/> */}
                <Routes>
                  <Route path="/*" element={<Discription/>}/>
                  <Route path="/Catalog" element={<Catalog/>}/>
                  <Route path="/Contacts" element={<Contact/>}/>
                  <Route path="/About" element={<About/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Content;
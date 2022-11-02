import { AuthTypes } from "../DataTypes/AuthData"


export const DoGetFetch = (url:string, cb:Function) => {
    fetch(url)
    .then(resopnse => resopnse.json())
    .then(data => cb(data))
    .catch(err => console.log(err))
}

export const DoPostFetch = (url:string, cb:Function, dataToServer:AuthTypes) => {
    fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToServer)
    })
    .then(response => response.json())
    .then(data => cb(data))
    .catch(err => console.log(err));
}
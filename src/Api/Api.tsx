export const serverAddress : string = 'http://127.0.0.1:5000/api';

//POST отправляет объект с логином и паролем,
//в ответ получает пользователя 
export const urlGetClientByLoginAndPassword = () : string => {
    return `${serverAddress}/login`
}
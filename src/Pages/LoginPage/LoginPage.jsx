import React from 'react'
import './LoginPage.css'

export default function LoginPage() {
    var formdata = new FormData();
    formdata.append("phone_number", "991234567");
    formdata.append("password", "advokat_admin");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("{{BASE_URL}}auth/signin", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return (
        <>
            <form>
                <label htmlFor="">Логин</label>
                <input type="text" placeholder='Ввьедите логин' />
                <label htmlFor="">Пароль</label>
                <input type="text" placeholder='Ввьедите пароль' />
                <button type='submit'>Войти</button>
            </form>


        </>
    )
}

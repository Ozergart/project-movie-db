import React, {useEffect, useState} from 'react';

import css from './User.module.css'
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {useAppContext} from "../../hooks";

const User = () => {

    const {darkTheme} = useAppContext();
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        userService.get().then(({data})=>setUser(data))
    }, []);

    if(!user){
        return <p>Loading</p>
    }
    const {username,avatar:{gravatar:{hash}},id} = user




    return (
        <div className={darkTheme?css.UserDark:css.User}>
            <div>
                <p>{username}</p>
                <p className={css.id}>id:{id}</p>
            </div>
            <img src={`https://www.gravatar.com/avatar/${hash}`} alt="avatar error"/>
        </div>
    );
};

export {User}
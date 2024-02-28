import React, {useEffect, useState} from 'react';

import css from './User.module.css'
import {IUser} from "../../interfaces";
import {userService} from "../../services";

const User = () => {


    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        userService.get().then(({data})=>setUser(data))
    }, []);

    if(!user){
        return <p>Loading</p>
    }
    const {username,avatar:{gravatar:{hash}}} = user



    return (
        <div className={css.User}>
            <span>{username}</span>
            <img src={`https://www.gravatar.com/avatar/${hash}`} alt="avatar error"/>
        </div>
    );
};

export {User}
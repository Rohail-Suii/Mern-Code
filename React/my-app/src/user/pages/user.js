import React from 'react';
import { Routes, Switch, Route} from 'react-router-dom';

import UserList from '../components/UserList';
function User(){
    const USER = [
        {
            id: 'u1',
            name: 'Jane Doe',
            image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            places: 3
        }
    ]
    return <UserList items={USER}/>;
}
export default User;
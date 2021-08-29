import React,{FC} from 'react';
import {IUsers} from '../types/types';

export interface UserListProps {
    users:IUsers[]
}
 
const UserList: FC<UserListProps> = ({users}) => {
    
    return ( 
    <div>
        {users.map(user=>
        <div key={user.id} style={{padding:'15px', border:'1px solid black'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
            </div>)}
    </div> 
    );
}
 
export default UserList;
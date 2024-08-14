import React, {FC} from 'react';
import {User} from "./User";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface UsersProps{
    id:number,
    username:string
}
export const Users:FC = () => {
    const users = useTypedSelector((state) => state.users.users);

    return (
        <ul>
            {
               users.map((user:UsersProps) => <User user={user} key={user.id} />)
            }
        </ul>
    );
}

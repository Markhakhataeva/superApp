import React, {FC} from "react";

interface UserProps{
    user?:{
        id:number,
        username:string
    }
}
export const User:FC<UserProps> = ({user}:UserProps) => {

    return (
        <li>
            {user?.username}
        </li>
    );
}


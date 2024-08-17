import React, { FC, useEffect, useState } from 'react'
import { getMessages } from '../../redux/Messages/MessagesSlice'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useParams } from 'react-router'
import styles from '../../styles/Message.module.scss'
import { Form } from '../Forms/Form'
import { Message } from './Message'

interface MessagesState {
        message_id: number;
        user_id:number,
        timestamp:string,
        message:string,

}


export const Messages:FC = () => {
    const dispatch = useTypedDispatch();
    const id:number = parseInt(useParams().id as string)
    const messages = useTypedSelector(state => state.messages.messages)
    const message = messages.filter((mes: MessagesState): boolean => mes.message_id === id)
    const users = useTypedSelector(state => state.users.users)
    const user = users.filter((user): boolean => user.id === id)


    const [text,setText] = useState<string>("")

    useEffect(() => {
        dispatch(getMessages())
    }, [])


    return (
        <div>
            <div className="Message">
                <div className={styles.name}>
                    {user.map((user) => user.username)}
                </div>

                <div className={styles.chat}>
                    <div className={styles.user_mess}>
                        <div className={styles.user_name}>
                            <p><b>
                                from:{user.map((user) => user.username)}
                            </b></p>
                        </div>
                        <p>
                            {
                                message.map((mes: MessagesState) => <div>{mes.message}</div>)
                            }
                        </p>
                    </div>
                    <Message text={text} />
                    <Form text={text} setText={setText} />
                </div>
            </div>
        </div>
    )
}
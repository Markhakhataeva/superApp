import React, { FC } from 'react'
import styles from '../../styles/Message.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'


interface Message {
    text: string,
}

export const Message: FC<Message> = ({ text }: Message) => {

    const messages = useTypedSelector(state => state.messages.messages)


    return (
        <div>
            <div className={styles.user_mes2}>
                <div className={styles.user_name}>
                    <p><b>
                        from:Markha Khataeva
                    </b></p>
                </div>
                <p>
                    {messages.map(mes => mes.message)}
                </p>
            </div>
        </div>
    )
}


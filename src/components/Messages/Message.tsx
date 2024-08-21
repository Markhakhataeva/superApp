import React, { FC } from 'react'
import styles from '../../styles/Message.module.scss'


interface Message {
    text: string,
    mes?: { message_id: number; user_id: number; timestamp: string; message: string ;text?:string}
}

export const Message: FC<Message> = ({ mes }: Message) => {

    return (
        <div>
            <div className={styles.user_mes2}>
                <div className={styles.user_name}>
                    <p><b>
                        from:Markha Khataeva
                    </b></p>
                </div>
                <p>
                    {mes?.text}
                    {/*{mes?.message}*/}
                </p>
            </div>
        </div>
    )
}


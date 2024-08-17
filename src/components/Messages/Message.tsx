import React, { FC } from 'react'
import styles from '../../styles/Message.module.scss'


interface Message{
    text:string
}

export const Message:FC<Message> = ({text}:Message) => {

    return(
        <div>
            <div className={styles.user_mes2}>
                <div className={styles.user_name}>
                    <p><b>
                        from:Markha Khataeva
                    </b></p>
                </div>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}


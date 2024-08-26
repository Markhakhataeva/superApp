import React, { FC } from 'react'
import styles from '../../styles/Message.module.scss'
import { IconLabelButtons } from '../Button/Button'
import { addMess } from '../../redux/Messages/MessagesSlice'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface formProps {
    text: string,
    setText: (a: string) => void,
}

export const Form: FC<formProps> = ({ text, setText }: formProps) => {
    const dispatch = useTypedDispatch()
    const messages = useTypedSelector(state => state.messages.messages)
    const id = messages.find(x => x)?.message_id
    const user_id = messages.find(x => x)?.user_id
    const timestamp = messages.find(x => x)?.timestamp



    const handleClick = () => {
        if(text.trim().length){
            if(id && user_id && timestamp){
                dispatch(addMess({ text, id, user_id, timestamp}))
                setText("")
            }
        }
        console.log(text)
    }
    console.log(id)
    return (
        <div>
            <div className={styles.collab}>
                <input
                    placeholder="Write a message..."
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}

                />
                <IconLabelButtons
                    handleClick={handleClick} />
            </div>
        </div>
    )
}


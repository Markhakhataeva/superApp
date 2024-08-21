import React, { FC } from 'react'
import styles from '../../styles/Message.module.scss'
import { IconLabelButtons } from '../Button/Button'
import { addMess } from '../../redux/Messages/MessagesSlice'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'

interface formProps {
    text: string,
    setText: (a: string) => void,
}

export const Form: FC<formProps> = ({ text, setText }: formProps) => {
    const dispatch = useTypedDispatch()

    const handleClick = () => {
        if(text.trim().length){
            dispatch(addMess(text))
            setText("")
        }
        console.log(text)
    }

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


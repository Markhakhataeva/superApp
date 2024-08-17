import React, { FC } from 'react'
import styles from '../../styles/Message.module.scss'
import { IconLabelButtons } from '../Button/Button'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { addText } from '../../redux/Messages/MessagesSlice'

interface formProps {
    text: string,
    setText: (a: string) => void,
}

export const Form: FC<formProps> = ({ text, setText,  }: formProps) => {
    const dispatch = useTypedDispatch()

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
                    onClick={() => dispatch(addText({text:text,setText:setText}))} />
            </div>
        </div>
    )
}


import React, {
  useContext,
  useState,
  useEffect,
} from 'react'
import { getMessagesRef } from './firebase/messages'
import { UserContext } from './auth'

function useControlledInput(initialValue = '') {
  const [text, setText] = useState(initialValue)
  const onChange = event => setText(event.target.value)
  return [text, onChange]
}

function useMessages(user) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (!user) return

    const un = getMessagesRef(user.uid).on(
      'value',
      snapshot => {
        setMessages(snapshot.val() || {})
      },
    )

    return () => {
      getMessagesRef(user.uid).off(un)
    }
  }, [user])

  const appendMessage = text => {
    if (!user) return

    const ref = getMessagesRef(user.uid)
    ref.push({ text })
  }

  return [messages, appendMessage]
}

function Input() {
  const user = useContext(UserContext)
  const [text, onChange] = useControlledInput()
  const [messages, appendMessage] = useMessages(user)

  const onClickAdd = () => {
    appendMessage(text)
  }

  return (
    <>
      <textarea onChange={onChange} value={text} />
      <br />
      <button onClick={onClickAdd}>add</button>
      <hr />
      {Object.values(messages).map(({ text }) => (
        <div key={text}>{text}</div>
      ))}
    </>
  )
}

export default Input

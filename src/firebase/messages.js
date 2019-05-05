import { database } from './firebase'

function getMessagesRef(uid) {
  return database.ref(`/messages/${uid}`)
}

export { getMessagesRef }

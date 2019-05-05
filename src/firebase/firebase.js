import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

/**
 * Config should contain: {
 *   apiKey
 *   authDomain
 *   databaseURL
 *   projectId
 *   storageBucket
 *   messagingSenderId
 * }
 * object from firebase.google.com
 */
import firebaseConfig from './firebaseConfig.json'

const app = firebase.initializeApp({
  ...firebaseConfig,
  persistence: true,
})

const auth = app.auth()
const database = app.database()

export { auth, database }
export default firebase

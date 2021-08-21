import FirebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import { FIREBASE_CONFIG } from 'src/configs'

FirebaseApp.initializeApp(FIREBASE_CONFIG)
FirebaseApp.analytics()
const Auth = FirebaseApp.auth
const Firestore = FirebaseApp.firestore
const RealtimeDB = FirebaseApp.database

export { Auth, Firestore, RealtimeDB }

export default FirebaseApp

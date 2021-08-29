import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBQO05vNvoXvYIpkCFTr4H_kUJkx8sFjs8',
  authDomain: 'daily-day-f9d30.firebaseapp.com',
  projectId: 'daily-day-f9d30',
  storageBucket: 'daily-day-f9d30.appspot.com',
  messagingSenderId: '37155923649',
  appId: '1:37155923649:web:625db51acde52bba801640',
  measurementId: 'G-Y02P4JP4SH',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db

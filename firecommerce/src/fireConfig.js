// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCzb4byoqpmoHLAK3dAUzFdYNI8hcTeW78',
  authDomain: 'firecommerce-921d6.firebaseapp.com',
  projectId: 'firecommerce-921d6',
  storageBucket: 'firecommerce-921d6.appspot.com',
  messagingSenderId: '635377262822',
  appId: '1:635377262822:web:a8ac640bae5ec51a075b27',
  measurementId: 'G-W9J6K724XN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const fireDB = getFirestore(app)

export default fireDB

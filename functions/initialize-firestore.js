const serviceAccount = require('../firebase/key/vue-project-a6bd1-firebase-adminsdk-n6z50-24674f20fe.json');
const { getFirestore } = require('firebase-admin/firestore');
const { initializeApp, cert } = require('firebase-admin/app');

initializeApp({
  credential: cert(serviceAccount),
});

let firestoreService;
const initializeFirestore = () => {
  if (!firestoreService) {
    firestoreService = getFirestore();
  }
  return firestoreService;
};

module.exports = initializeFirestore;

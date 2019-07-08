// import firebase from 'firebase';
// // import env from '../.env';
// class Fire {
//   constructor() {
//     this.init();
//     this.observeAuth();
//   }

//   init = () => {
//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         apiKey: process.env.REACT_APP_API_KEY,
//         authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//         databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//         projectId: process.env.REACT_APP_PROJECT_ID,
//         storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//         messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//         appId: process.env.REACT_APP_APP_ID,
//       });
//     }
//   };

//   observeAuth = user => {
//     if (!user) {
//       try {
//         // console.log('IM HERE NOW');
//         firebase.auth().signInAnonymously();
//       } catch ({ message }) {
//         alert(message);
//       }
//     }
//   };

//   get uid() {
//     return (firebase.auth().currentUser || {}).uid;
//   }

//   on = callback =>
//     this.ref
//       .limitToLast(20)
//       .on('child_added', snapshot => callback(this.parse(snapshot)));

//   get timestamp() {
//     return firebase.database.ServerValue.TIMESTAMP;
//   }

//   off() {
//     this.ref.off();
//   }
// }

// Fire.shared = new Fire();
// export default Fire;

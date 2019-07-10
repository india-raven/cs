import firebase from "firebase";
// import env from '../.env';
class GeoFire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: process.envREACT_APP_API_KEY,
        authDomain: process.env.GEOFIRE_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.GEOFIRE_APP_PROJECT_ID,
        storageBucket: process.env.GEOFIRE_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.GEOFIRE_APP_MESSAGING_SENDER_ID,
        appId: process.env.GEOFIRE_APP_APP_ID
      });
    }
  };

  observeAuth = user => {
    if (!user) {
      try {
        // console.log('IM HERE NOW');
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on("child_added", snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  off() {
    this.ref.off();
  }
}

GeoFire.shared = new GeoFire();
export default GeoFire;

// let firebaseRef = firebase.database().ref()
// let geoFire = new GeoFire(firebaseRef)
// let ref = geoFire.ref()

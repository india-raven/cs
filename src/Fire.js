import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAmBNrwmBFVnA1fbey5MqrW83Qzkb6m-b8",
        authDomain: "india-raven.firebaseapp.com",
        databaseURL: "https://india-raven.firebaseio.com",
        projectId: "india-raven",
        storageBucket: "india-raven.appspot.com",
        messagingSenderId: "209562546417",
        appId: "1:209562546417:web:57f61f5f94205733"
      });
    }
  };

  observeAuth = user => {
    if (!user) {
      try {
        console.log("IM HERE NOW");
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

Fire.shared = new Fire();
export default Fire;

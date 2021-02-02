import { firebase } from '../firebase/config';

export const api = (type, value = {}) => {
  const data = firebase.firestore().collection('data').doc('data');
  if (type == 'get') {
    data.get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        } else {
          console.log('Ei löytyny')
        }
      })
      .catch((error) => {
        console.log("error", error);
      })  
  }
  else if (type == 'set') {
    data.set({
      value,
    })
    .then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
      } else {
        console.log('Ei löytyny')
      }
    })
    .catch((error) => {
      console.log("error", error);
    })    
  }
  return null;
}
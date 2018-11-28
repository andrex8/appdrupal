import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDUVaEsT0ShLoeDKihjBeYyNtnoNPuUPP4",
  authDomain: "drupalfacebook-22f0d.firebaseapp.com",
  databaseURL: "https://drupalfacebook-22f0d.firebaseio.com",
  projectId: "drupalfacebook-22f0d",
  storageBucket: "drupalfacebook-22f0d.appspot.com",
  messagingSenderId: "881271025074"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
const database = firebase.database();
export {
  auth,
  database,
};


//Crear promociones
export const crearPromocion = (id, nombre) => {
  return new Promise((resolve, reject) => {
    boardsRef.push({
      ownerId: ownerId,
      name: name
    }).then(result => {
      resolve(true);
    }).catch(err => {
      reject(false);
   });
  });
}

//Leer promociones
export const listarPromociones = () => {
  return new Promise((resolve, reject) => {
    var listarPromociones = [];
    boardsRef.once('value', snapshot => {
      snapshot.forEach(child => {
        listBoards.push({
          id: child.key,
          ownerId: child.val().ownerId,
          name: child.val().name
        });
      });
      resolve(listBoards);
    });
  })
}

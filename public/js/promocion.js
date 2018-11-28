import { database } from './firebase'; //Importamos la base de datos

const dbRef = database.ref(); 
const boardsRef = dbRef.child('promociones');

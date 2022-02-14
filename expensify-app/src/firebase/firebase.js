import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  "prompt": "select_account",
});

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// })

// database.ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "rent",
//   note: "blah",
//   amount:109500,
//   createdAt:97645625424
// });

// database.ref("notes/-MDbJJzrEFbZtL0trrLa").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "Angular, React, Python",
// });

// const firebaseNotes = {
//   notes: {
//     reallylongid: {
//       title: "First note",
//       body: "This is my note"
//     },
//     reeeeeeallylongid: {
//       title: "First note",
//       body: "This is my note"
//     }
//   }
// };

// const notes = [{
//   id: "12",
//   title: "First note",
//   body: "This is my note"
// }, {
//   id: "76",
//   title: "Another note",
//   body: "This is my note"
// }];

// database.ref("notes").set(notes);

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// }, (error) => {
//   console.log("Error with data fetching", error);
// });

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database.ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("Error fetching data", error);
//   });

// database.ref().set({
//   name: "J C",
//   age: 47,
//   stressLevel: 6,
//   job: {
//     title: "Software Developer",
//     company: "Google",
//   },
//   isSingle: false,
//   location: {
//     city: "Matthews",
//     country: "United Sates"
//   }
// }).then(() => {
//   console.log("data is saved");
// }).catch((error) => {
//   console.log("this failed.", error);
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });

// database.ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("removed successfully");
//   })
//   .catch((error) => {
//     console.log("error removing: ", error);
//   });
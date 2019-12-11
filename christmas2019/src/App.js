import React, { useState, useEffect }  from 'react';
import Grid from './components/Grid';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database';

function App() {
  const [wishes, updateWishes] = useState([]);
  const [appState, updateAppSate] = useState([]);
  const [offices, updateOffices] = useState([
    {
      id: 'el1',
      office: 'Atlanta',
      total: 0
    },
    {
      id: 'el2',
      office: 'Bogotá',
      total: 0
    },
    {
      id: 'el3',
      office: 'Brooklyn',
      total: 0
    },
    {
      id: 'el4',
      office: 'Chicago',
      total: 0
    },
    {
      id: 'el5',
      office: 'D.C.',
      total: 0
    },
    {
      id: 'el6',
      office: 'Detroit',
      total: 0
    },
    {
      id: 'el7',
      office: 'London',
      total: 0
    },
    {
      id: 'el8',
      office: 'Oakland',
      total: 0
    },
    {
      id: 'el9',
      office: 'Singapore',
      total: 0
    },
    {
      id: 'el10',
      office: 'Toronto',
      total: 0
    },
    {
      id: 'el11',
      office: 'Tokio',
      total: 0
    },
    {
      id: 'el12',
      office: 'Medellín',
      total: 0
    },
    {
      id: 'el13',
      office: 'L.A.',
      total: 0
    }
  ]);

  useEffect(() => {
    connectToFirebase();
    getAllMessages();
  }, [appState]);
  
  const connectToFirebase = () => {
    let config = {
      apiKey: "AIzaSyBeUzMx48ndfoavV0NO5Ip2a_DdvdnE_4k",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://christmas-huge.firebaseio.com/",
      storageBucket: "bucket.appspot.com"
    };
    firebase.initializeApp(config);
    firebase.database();
  }

  const getAllMessages = () => {
    let posts = firebase.database().ref('purposes/');
    let postsData = [];
    
    posts.orderByKey().on('child_added', (snapshot) => {
      let currentPosts = [...offices];
      postsData.push({
        name: snapshot.val().name,
        office: snapshot.val().office,
        purpose: snapshot.val().purpose
      });
      
      currentPosts.map( item => {
        if (item.office == snapshot.val().office) {
          item.total++;
        }
        return item;
      })

      updateOffices(currentPosts);
    });
  }

  const writeData = (post) => {
    const newPostKey = firebase.database().ref().child('purposes').push().key;
    let updates = {};
    let response = undefined;
    updates['purposes/' + newPostKey] = post;
    response = firebase.database().ref().update(updates);

    response.then((data) => {
      // let event = new Event("closeForm", {bubbles: true});
      // document.dispatchEvent(event);
    });
    return true;
  }

  return (
    <div className="app">
     <h2 className="title">HUGE WISHES DRAWER</h2>
     <Grid wishes={offices} />
    </div>
  );
}

export default App;

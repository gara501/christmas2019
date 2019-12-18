import React, { useState, useEffect }  from 'react';
import Swal from 'sweetalert2';
import firebase from 'firebase/app';
import 'firebase/database';
import FormMessage from './components/FormMessage';
import Treasure from './components/Treasure';
import Wizard from './components/Wizard';
import Messages from './components/Messages';
import Floor from './components/Floor';


function App() {
  const [messages, updateMessages] = useState([]);
  
  const [frames, updateFrames] = useState({
    frame1: 'frame',
    frame2: 'frame hidden'
  });

  const [appState, updateAppSate] = useState([]);
  const [offices, updateOffices] = useState([
    {
      id: 'el1',
      office: 'Atlanta',
      total: 0
    },
    {
      id: 'el2',
      office: 'Bogotá',
      total: 0
    },
    {
      id: 'el3',
      office: 'Brooklyn',
      total: 0
    },
    {
      id: 'el4',
      office: 'Chicago',
      total: 0
    },
    {
      id: 'el5',
      office: 'D.C.',
      total: 0
    },
    {
      id: 'el6',
      office: 'Detroit',
      total: 0
    },
    {
      id: 'el7',
      office: 'London',
      total: 0
    },
    {
      id: 'el8',
      office: 'Oakland',
      total: 0
    },
    {
      id: 'el9',
      office: 'Singapore',
      total: 0
    },
    {
      id: 'el10',
      office: 'Toronto',
      total: 0
    },
    {
      id: 'el11',
      office: 'Tokio',
      total: 0
    },
    {
      id: 'el12',
      office: 'Medellín',
      total: 0
    },
    {
      id: 'el13',
      office: 'L.A.',
      total: 0
    }
  ]);

  useEffect(() => {
    connectToFirebase();
    getAllMessages();
  }, [appState]);
  
  const connectToFirebase = () => {
    let config = {
      apiKey: "AIzaSyBeUzMx48ndfoavV0NO5Ip2a_DdvdnE_4k",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://christmas-huge.firebaseio.com/",
      storageBucket: "bucket.appspot.com"
    };
    firebase.initializeApp(config);
    firebase.database();
  }

  const getAllMessages =  () => {
    let posts = firebase.database().ref('purposes/');
    let postsData = [];
    
    posts.orderByKey().on('child_added', (snapshot) => {
      let currentPosts = [...offices];
      let newPost = snapshot.val();
      postsData.push(newPost);

      currentPosts.map( item => {
        if (item.office == newPost.office) {
          item.total++;
        }
        return item;
      })

      updateOffices(currentPosts);
      updateMessages([...postsData], postsData);
    });
  }

  const selectFrame = (frameFrom) => {
    console.log(frameFrom)
    let frames = {};
    if (frameFrom === 'frame2') {
      frames = {
        frame1: 'frame hidden',
        frame2: 'frame'
      };
    } else {
      frames = {
        frame1: 'frame',
        frame2: 'frame hidden'
      }
    }
    updateFrames(frames);
    /*
    setTimeout(() => {
      updateFrames(frames);
    }, 1000)
    */
  }

  const writeData = (post) => {
    const fbpost = {
      name: post.name,
      office: post.office,
      purpose: post.message
    };
    
    const newPostKey = firebase.database().ref().child('purposes').push().key;
    let updates = {};
    let response = undefined;
    updates['purposes/' + newPostKey] = fbpost;
    response = firebase.database().ref().update(updates);

    response.then((data) => {
      // let event = new Event("closeForm", {bubbles: true});
      // document.dispatchEvent(event);
      Swal.fire(
        'Message Sent!',
        'Your message has been sent, thanks!',
        'success'
      )
    });
    return true;
  }

  return (
    <div className="app">
      <div className={frames.frame1}>
        <div className="container">
          <div className="paralax-bg">
            <img className="layer layer1" src={process.env.PUBLIC_URL + '/images/1.png'} />
            <img className="layer layer2" src={process.env.PUBLIC_URL + '/images/2.png'} />
            <img className="layer layer3" src={process.env.PUBLIC_URL + '/images/3.png'} />
            <img className="layer layer4" src={process.env.PUBLIC_URL + '/images/4.png'} />
            <img className="layer layer5" src={process.env.PUBLIC_URL + '/images/5.png'} />
            <img className="layer layer6" src={process.env.PUBLIC_URL + '/images/6.png'} />
            <h3 className="layer layer7 extruded-text">HUGE WISHES</h3>
            <section className="message-list layer layer8">
              <section className="message -left">          
                <div className="nes-container is-rounded nes-bg-white">
                  <p>Hi Huger!, share your wishes for the next year.</p>
                </div>
              </section>
              <FormMessage writeData={writeData} offices={offices} />
            </section>
            <Treasure selectFrame={selectFrame} />
            <Wizard total={messages.length} />
            <Floor />
          </div>
        </div>
      </div>
      <div className={frames.frame2}>
        <Messages messages={messages} selectFrame={selectFrame} />
      </div>
    </div>
  );
}

export default App;


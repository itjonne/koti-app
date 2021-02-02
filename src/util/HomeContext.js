import React, {createContext, useState, useEffect} from 'react';

import {api} from '../util/api';
import { firebase, getData } from '../firebase/config';

export const HomeContext = createContext();



// Poista snäpshotti omasta aina.
export const HomeContextProvider = ({children}) => {
  let unsubscribe;

  const getData = () => {
    return new Promise((resolve, reject) => {
      unsubscribe = firebase.firestore().collection("data").doc("data")
      .onSnapshot((snapshot) => {
        let source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", snapshot.data());
        let updatedData = {};
        console.log('onSnapshot Called!')
        if (source === 'Server') {
        updatedData = snapshot.data();
        console.log("updated!", updatedData);
          initialize(updatedData);
        }
        resolve(updatedData);
      }, reject)
    })
  }

  const setData = (data) => {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection("data").doc("data")
      .set({
        ...data,
      },{merge: true, reject});
        resolve(data);
      })
    }

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    
    /*
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await firebase.firestore().collection('data').doc('data').get();
        if (response.exists) {
          let data = response.data();
          initialize(data);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    */
   setIsLoading(true);

   /*
   getData().then(doc => {
    console.log('useEffect', 'Data Received');
    console.log(doc);
    initialize(doc);
    setIsLoading(false);
  })
  */
  }, []);
  
  const initialize = (data) => {
    _setAamuRuoka(data.aamuRuoka);
    _setPaivaRuoka(data.paivaRuoka);
    _setIltaRuoka(data.iltaRuoka);
    _setHiekka(data.hiekka);
    _setTiskit(data.tiskit);
    _setPyykit(data.pyykit);
    _setRoskat(data.roskat);
    _setSiivous(data.siivous);
  }

  // Hilla
  const [aamuRuoka, _setAamuRuoka] = useState(false);
  const [paivaRuoka, _setPaivaRuoka] = useState(false);
  const [iltaRuoka, _setIltaRuoka] = useState(false);
  const [hiekka, _setHiekka] = useState(0);

  const setAamuRuoka = (arvo) => {
    setData({aamuRuoka: arvo}).then(doc => {
      console.log("aamu", doc);
    })
    _setAamuRuoka(arvo);
  }

  const setPaivaRuoka = (arvo) => {
    setData({paivaRuoka: arvo}).then(doc => {
      console.log("paiva", doc);
    })
    _setPaivaRuoka(arvo);
  }

  const setIltaRuoka = (arvo) => {
    setData({iltaRuoka: arvo}).then(doc => {
      console.log("ilta", doc);
    })
    _setIltaRuoka(arvo);
  }

  const setHiekka = (numero) => {
    setData({hiekka: numero}).then(doc => {
      console.log("hiekka", doc);
    })
    _setHiekka(numero);
  }  

  // Työt
  const [tiskit, _setTiskit] = useState(0);
  const [pyykit, _setPyykit] = useState(0);
  const [roskat, _setRoskat] = useState(0);
  const [siivous, _setSiivous] = useState(0);

  const setTiskit = (numero) => {
    setData({tiskit: numero}).then(doc => {
      console.log("tiskit", doc);
    })
    _setTiskit(numero);
  }
  const setPyykit = (numero) => {
    setData({pyykit: numero}).then(doc => {
      console.log("pyykit", doc);
    })
    _setPyykit(numero);
  }
  const setRoskat = (numero) => {
    setData({roskat: numero}).then(doc => {
      console.log("roskat", doc);
    })
    _setRoskat(numero);
  }
  const setSiivous = (numero) => {
    setData({siivous: numero}).then(doc => {
      console.log("siivous", doc);
    })
    _setSiivous(numero);
  }  

  const contextValue = {
    aamuRuoka,
    paivaRuoka,
    iltaRuoka,
    tiskit,
    pyykit,
    roskat,
    siivous,
    hiekka,
    isLoading,
    setAamuRuoka,
    setPaivaRuoka,
    setIltaRuoka,
    setTiskit,
    setPyykit,
    setRoskat,
    setSiivous,
    setHiekka,
  }

  return(
    <HomeContext.Provider value={contextValue}>
      {children}
    </HomeContext.Provider>
  )
}
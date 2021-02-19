import { set } from 'mongoose';
import React, { useState, useContext } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';

const TestContext = React.createContext();

const TestProvider = ({ children }) => {
   const [zipcode, setZipcode] = useState('');
   const [typeAnimal, setTypeAnimal] = useState('Dog');
   const [fetchedPetData, setFetchedPetData] = useState([])

 
  const handleSearch = (e, history) => {
    console.log('sometype of string', history)
    event.preventDefault();
    console.log(event.target.value)
    console.log('inside handleSearch')

    if (event.target.value === 'Cat' || event.target.value === 'Dog'){
      console.log('inside if type change', event.target.value)
      setTypeAnimal(event.target.value)
    }
    else if(Number(event.target.value)){
      console.log('inside if zipcode change', event.target.value)
      setZipcode(event.target.value)
    }
    else if (e == 'submit'){
      //console.log(this.state.type)
      let fetchURL;
      if (typeAnimal === 'Dog'){
        fetchURL = 'petfinder/dog'  + '/' + zipcode;
      }
      else {
        fetchURL = 'petfinder/' + typeAnimal + '/' + zipcode;
      }
      console.log(fetchURL)
      fetch(fetchURL)
        .then(data => data.json())
        .then(data => {
        console.log(data)
        setFetchedPetData(data)})
    }
  }

  const testTheConsole = () => {
    console.log("We are in the Global context line 10")
  };

  return (
    <TestContext.Provider
      value={{
        testTheConsole,
        handleSearch
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TestContext);
};

export { TestContext, TestProvider };
import React, { useEffect, useState } from 'react';
import './App.css'
import ContactCard from './ContactCard';


const App = () => {

    const [results, setResults] = useState([]);

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
    console.log(data)
    setResults(data.results)
  });
  },[])

  

  return(
    <div>
      {results.map((results, index)=>{
        return(
          <ContactCard key = {index}
          avatarUrl = {results.picture.large}
          name ={results.name.first}
          email = {results.email}
          age = {results.dob.age} />
        )
      })};
    </div>
 
  )

}

export default App;


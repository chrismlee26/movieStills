import React, { useEffect } from 'react'

const getData=()=>{
  fetch('data.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}
useEffect(()=>{
  getData()
},[])


// import data from './movie-data.json'

// data.forEach((obj, i) => { obj.id = i })

// export default data ``
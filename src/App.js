import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'
import './App.css'

const  App = () =>  {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async() => {
      const result = await axios('https://www.breakingbadapi.com/api/characters')

      console.log(result.data)
    }
    fetchItems()
  }, [])


  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;

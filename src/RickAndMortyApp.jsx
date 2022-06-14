import './App.css'
import useLocation from './hooks/useLocation'
import LocationCard from './components/LocationCard'
import CharacterCard from './components/CharacterCard/CharacterCard'
import InputSearch from './components/InputSearch/InputSearch'
import { useState } from 'react'
import Footer from './components/Footer'


function RickAndMortyApp() {

  const [searchedValue, setSearchedValue] = useState()

  const {location} = useLocation(searchedValue)

  const people = location?.residents.map(resident => (
        <CharacterCard 
        resident={resident}
        key = {resident}
        />
    ))

    const handlerClick = (e) =>{
      e.preventDefault()
      setSearchedValue(e.target.value)
    }

  return (
    <div className="App">
      <header className='header'>
        <InputSearch  
        handlerClick ={handlerClick}
        />
      </header>
      
      <LocationCard location={location}/>

      <main className='list'>
        {
          people
        }
      </main>

    </div>
  )
  
}

export default RickAndMortyApp

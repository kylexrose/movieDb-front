import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const MovieDetail =()=>{
    const [Actors, setActors] = useState('')
    const [Awards, setAwards] = useState('')
    const [Country, setCountry] = useState('')
    const [Plot, setPlot] = useState('')
    const [Poster, setPoster] = useState('')
    const [Rated, setRated] = useState('')
    const [Ratings, setRatings] = useState('')
    const [Title, setTitle] = useState('')
    const [imdbID, setImdbID] = useState('')

    useEffect(() => {
        const fetchInfo = async()=>{
            try {
                const path = window.location.pathname.split('/')
                const id = path[path.length - 1]
                let result = await axios.get(
                    `https://omdbapi.com/?apikey=b96208ec&i=${id}`
                )
                setActors(result.data.Actors),
                setAwards(result.data.Awards),
                setCountry(result.data.Country),
                setPlot(result.data.Plot),
                setPoster(result.data.Poster),
                setRated(result.data.Rated),
                setRatings(result.data.Ratings),
                setTitle(result.data.Title),
                setImdbID(result.data.imdbID) 
            } catch (error) {
                console.log(error)
            }
        }
        fetchInfo()
    }, [])

        return (
            <div style={{marginTop: '150px', display: 'flex', justifyContent: 'center'}}>
              <div style={{width: '50%', margin: '20px'}}>
                  <img src={Poster} alt={Title} />
              </div>
              <div style={{width: '50%', margin: '20px'}}>
                  <div><strong>Actors: </strong> {Actors}</div>
                  <div><strong>Awards: </strong> {Awards}</div>
                  <div><strong>Country: </strong> {Country}</div>
                  <div><strong>Plot: </strong> {Plot}</div>
                  <div><strong>Rated: </strong> {Rated}</div>
                  <div><strong>Title: </strong> {Title}</div>
                  <div><strong>imdbID: </strong> {imdbID}</div>
              </div>
            </div>
          )
        }
export default MovieDetail
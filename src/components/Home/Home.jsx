import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const APIKey = 'b96208ec'
    // search function
    // call api on page load, display top 9 hardcoded
    const topMovies = [
  {
    "Title": "Deadpool",
    "Year": "2016",
    "imdbID": "tt1431045",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Free Guy",
    "Year": "2021",
    "imdbID": "tt6264654",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "John Wick",
    "Year": "2014",
    "imdbID": "tt2911666",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
  },
  {
    "Title": "Final Destination",
    "Year": "2000",
    "imdbID": "tt0195714",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MjlmOWYtYzdjMS00OTgwLThjMDctZWU4N2FkZjgyNTJiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Haunting in Connecticut 2: Ghosts of Georgia",
    "Year": "2013",
    "imdbID": "tt1457765",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MTA0NDAwOF5BMl5BanBnXkFtZTcwMDQ0NzQ4OA@@._V1_SX300.jpg"
  },
  {
    "Title": "Weird Science",
    "Year": "1985",
    "imdbID": "tt0090305",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjI2N2Q4ZjEtZjMyNC00MDM5LTkxZTQtNzA4MTE1ZGQyYTgwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Deep Impact",
    "Year": "1998",
    "imdbID": "tt0120647",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EwNjMxOWYtYWE5Zi00MWEyLWJlMGMtYzA1NDQyZGE5YWZjXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Deep Cover",
    "Year": "2025",
    "imdbID": "tt31121295",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ5ZTJjZTEtZWRiOC00NGM3LTg5NGItMTkxZmJmZjg5NzA3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Wizard of Oz",
    "Year": "1939",
    "imdbID": "tt0032138",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWRmY2I0MGItYTQ0OC00NWZmLWIwMDktYjJlNDc0MzVhMmViXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Wicked",
    "Year": "2024",
    "imdbID": "tt1262426",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_SX300.jpg"
  }
]
    const [searchInput, setSearchInput] = useState('') //textbox
    const [movies, setMovies] = useState([]) //array so .map does not crash

    useEffect(() => {
      async function getStarterMovies(){
        try {
            // const movieArray = []
            // for(let movie of topMovies){
            //     const response = await axios.get(`http://www.omdbapi.com/?apikey=b96208ec&s=${movie}`)
            //     movieArray.push(response.data.Search[0])
            // }
            setMovies(topMovies)
        } catch (error) {
            console.log(error)
        }
      }
      getStarterMovies()
    }, []) //empty if we only want it running once

    // take the input text, search api
    // setMovies
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=b96208ec&s=${searchInput}`)
            if(response.data.Search){
                setMovies(response.data.Search)
            }
            setSearchInput('')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Box sx={{mt: 25, display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <TextField 
                sx={{border: 'black 2px solid', width: '25%'}}
                placeholder='Search for movies...'
                onChange={ e => setSearchInput(e.target.value)}
                value={searchInput}
            />
            <Button 
                sx={{ml: '20px', backgroundColor: 'slateBlue', color: 'white'}}
                onClick={handleSearch}>
                Search
            </Button>
        </Box>
        <Box sx={{
            display: 'flex', 
            flexDirection: 'row',
            flexWrap:'wrap'}}>
            {
                movies.map(movie => (
                    <Box 
                        key={movie.imdbID}
                        sx={{width: "150px", flex: '1 1 33%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Link to = {`/movie-detail/${movie.imdbID}`} style={{textDecoration: 'none', color: "black"}} >
                          <div>
                            <img style={{width: '100px'}} className='moviePoster' src={movie.Poster} alt="" />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            Title: {movie.Title}
                            <br/>
                            Year: {movie.Year}
                        </div>
                        </Link>
                    </Box>
                ))
            }
        </Box>
    </Box>
  )
}

export default Home
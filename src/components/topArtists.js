import React, { useState, useEffect } from "react"

const TopArtists = () => {
  const [artists, setArtists] = useState([])
  useEffect(() => {
    async function getTopArtist() {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?apikey=${process.env.MUSIC_MATCH_API_KEY}&page=1&page_size=10`
      ).catch(e => {
        console.log(e)
      })
      const data = await response.json()

      console.log("response", data)
      setArtists(data?.message?.body?.artist_list)
    }
    getTopArtist()
  }, [])

  if (artists.length > 0) {
    return artists.map(({ artist }) => (
      <div
        className=" border border-gray-300 rounded py-2 p-4 m-2"
        key={artist.artist_id}
      >
        {artist.artist_name}
      </div>
    ))
  }

  return <p>Loading...</p>
}

export default TopArtists

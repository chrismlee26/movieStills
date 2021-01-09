import React from 'react'

function Search() {
  const [ query, setQuery ] = useState('')
    const movies = data.filter(({title}) => {
      const inTitle = title.toLowerCase().includes(query.toLowerCase())
      return inTitle
    }).map(({title}, i) => {
      return (
        // This is the gallery page
      )


    })

  return (
    <div>
      {/* form/input here */}
      {/* RT movies -- but poposlist changes the whole page. */}
    </div>
  )
}

export default Search

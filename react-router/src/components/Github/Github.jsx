import React, { useState, useEffect } from 'react'

function Github() {

  const [data, setData] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(response => {setData(response)})
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt='Git Profile' width={300}/>
    </div>
  )
}

export default Github
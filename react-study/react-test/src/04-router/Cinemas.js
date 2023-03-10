import React from 'react'

export default function Cinemas(props) {
    console.log(props.match.params.myid)
  return (
    <div>
      <div>Cinemas</div>
      <button onClick={()=>{
        props.history.push({pathname:'/films',query:{myid:'2333'}})
      }}>go films</button>
    </div>
  )
}

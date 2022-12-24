import React from 'react'
import {useParams} from "react-router-dom" 

export default function ProductDisplay() {
    const {id} = useParams()
  return (
    <div>ProductDisplay {id}</div>
  )
}

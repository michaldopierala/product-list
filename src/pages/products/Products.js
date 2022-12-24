import React from 'react'
import { Link, Outlet } from "react-router-dom";


export default function Products() {
  return (
    <>
     <div className="productsNav">
      <Link to="search">Search</Link>
      <Link to="list">List</Link>
      <Link to="add">Add</Link>
     </div>
     <Outlet/>
    </>
   

)
}

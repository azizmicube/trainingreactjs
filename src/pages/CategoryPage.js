import React from 'react'
import { Link } from "react-router-dom"

const CategoryPage = () => {
  return (
    <div>
        <h3>Category Page</h3>

        <div>
            <h5>Pilih Kategori</h5>
            <div>
                <Link style={{margin : '24px'}} to="/detail/Beef">Beef</Link>
                <Link style={{margin : '24px'}} to="/detail/Seafood">Seafood</Link>
                <Link style={{margin : '24px'}} to="/detail/Chicken">Chicken</Link>
            </div>
        </div>
    </div>
  )
}

export default CategoryPage
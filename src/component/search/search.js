import React from 'react'
import searchIcon from '../../images/search.svg'

export default function search() {
    return (
        <div className="search-bar">
            <img src={searchIcon} alt="search" /><input type="search" className="ml-1" />
        </div>
    )
}

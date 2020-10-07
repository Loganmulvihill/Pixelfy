import React from 'react'

export default function Navbar() {
  return (
    <div className="brand-bg-color pb-3 pt-3 d-flex justify-content-center">
      <div className="p-1 d-flex justify-content-center align-items-center">
      <h1>Pixelfy</h1>
    </div>
      <div className="p-1">
        <div>
        <input className="m-1 rounded" type="text" placeholder="Searh a word"/>
          <button className="btn btn-primary navbar-button-width">Search</button>
      </div>
        <div>
          <input className="m-1 rounded" type="text" placeholder="Amount of Delay (2s)" />
          <button className="btn btn-primary navbar-button-width">Delayed Search</button>
        </div>
      </div>
    </div>
  )
}

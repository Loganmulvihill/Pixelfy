import React from 'react'

export default function Navbar(props) {

  const { handleSearchChange, networkDelayChange } = props;
  return (
    <div className="brand-bg-color pb-3 pt-3 d-flex justify-content-center">
      <div className="p-1 d-flex justify-content-center align-items-center">
      <h1>Pixelfy</h1>
    </div>
      <div className="p-1">
        <div>
        <input className="rounded" type="text" placeholder="Searh a word" onChange={handleSearchChange} />
          <button className="btn btn-primary navbar-button-width m-1">Search</button>
      </div>
        <div>
          <input className="rounded" type="number" placeholder="Amount of Delay (2s)" onChange={networkDelayChange} />
          <button className="btn btn-primary navbar-button-width m-1">Delayed Search</button>
        </div>
      </div>
    </div>
  )
}

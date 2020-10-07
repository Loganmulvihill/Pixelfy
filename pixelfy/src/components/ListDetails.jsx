import React from 'react'

export default function ListDetails(props) {
  const { images, index, setView } = props;
  const details = images.[index];
  return (
    <div className="container mt-3 mb-3">
      <img className="img-fluid border-green rounded" src={details.largeImageURL} alt={details.tags} />
      <div className="d-flex justify-content-center align-items-center flex-column">
      <h5 className="m-1">{`Image Tags:${details.tags}`}</h5>
        <h6 className="m-1">{`Total Views:${details.views}`}</h6>
        <h6 className="m-1">{`User:${details.user}`}</h6>
        <button className="btn btn-primary m-1" onClick={() => setView('list') }>Return to Pictures</button>
    </div>
    </div>
  )
}

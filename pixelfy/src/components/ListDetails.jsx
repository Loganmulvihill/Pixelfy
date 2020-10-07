import React from 'react'

export default function ListDetails(props) {
  const { detailImage, setView } = props;

  return (
    <div className="container mt-3 mb-3">
      <img className="img-fluid border-green rounded" src={detailImage.largeImageURL} alt={detailImage.tags} />
      <div className="d-flex justify-content-center align-items-center flex-column rounded">
        <h5 className="m-1 brand-bg-color rounded">{`Image Tags: ${detailImage.tags}`}</h5>
        <h6 className="m-1 brand-bg-color rounded">{`Total Views: ${detailImage.views}`}</h6>
        <h6 className="m-1 brand-bg-color rounded">{`User: ${detailImage.user}`}</h6>
        <button className="btn btn-primary m-1" onClick={() => setView('list') }>Return to Pictures</button>
    </div>
    </div>
  )
}

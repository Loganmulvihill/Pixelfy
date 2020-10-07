import React from 'react'

export default function ListItem(props) {
  const { picture } = props;
  return (
    <div className="col-12 col-md-3 list-item-height d-flex justify-content-center m-1">
      <img className="img-fluid border-green rounded" src={picture.largeImageURL} alt={picture.tags}/>
    </div>
  )
}

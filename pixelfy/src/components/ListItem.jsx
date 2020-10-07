import React from 'react'

export default function ListItem(props) {
  const { picture } = props;
  return (
    <div>
      <img src={picture.largeImageURL} alt={picture.tags}/>
    </div>
  )
}

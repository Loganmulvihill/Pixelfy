import React from 'react';
import ListItem from './ListItem';

export default function List(props) {

  const { images } = props;
  return (
    <div className="container">
        {
          images.map(picture => {
            return <ListItem key={picture.id} picture={picture} />
          })
        }
    </div>
  )
}

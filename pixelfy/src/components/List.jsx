import React from 'react';
import ListItem from './ListItem';

export default function List(props) {

  const { images } = props;
  return (
    <div className="container d-flex justify-content-center flex-wrap mt-3">
        {
          images.map(picture => {
            return <ListItem key={picture.id} picture={picture} />
          })
        }
    </div>
  )
}

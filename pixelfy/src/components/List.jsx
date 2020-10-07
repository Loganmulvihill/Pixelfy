import React from 'react';
import ListItem from './ListItem';

export default function List(props) {

  const { images, setView, setIndex } = props;
  return (
    <div className="container d-flex justify-content-center flex-wrap mt-3">
        {
          images.map((picture, index) => {
            return <ListItem key={picture.id} picture={picture} setIndex={setIndex} setView={setView} index={index} />
          })
        }
    </div>
  )
}

import React from 'react';

const Card = (props) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${props.id}?30x30`} />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.city}</h3>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
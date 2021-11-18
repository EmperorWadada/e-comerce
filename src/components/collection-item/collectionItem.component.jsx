import React from 'react';
import CollectionPrview from '../preview-collection/collection-preview';
import './collection.style.scss';

const CollectionItem = ({name, price, imageUrl}) => (
    <div className='collection-item'>
      <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl })`
        }}
      />
     <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    </div>
)

export default CollectionItem;
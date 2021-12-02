import React from 'react';
import CollectionItem from '../collection-item/collectionItem.component';
import './collections-preview.style.scss';


const CollectionPrview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
              items.filter((item, index) => index < 4)
                    .map(items => (
                        <CollectionItem key={items.id} items={items}/>
                    ))
            }
        </div>
    </div>
);


export default CollectionPrview;

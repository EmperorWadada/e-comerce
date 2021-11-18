import React from 'react'
import CollectionPrview from '../preview-collection/collection-preview';
import SHOPDATA from './shop.data';
import './shop.style.scss'

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOPDATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop-page'>
               {
                   collections.map(({id, ...otherCollections}) => (
                       <CollectionPrview key={id} {...otherCollections}/>
                   ))
               }
            </div>
        )
    }
}

export default ShopPage;
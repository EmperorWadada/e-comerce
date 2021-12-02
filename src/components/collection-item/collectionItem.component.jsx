import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import { addItems } from '../../redux/cart/cat.action';
import './collection.style.scss';

const CollectionItem = ({items, addItems}) => {
  const {name, price, imageUrl} = items;

return (
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
    <CustomButton inverted onClick={() => addItems(items)}>ADD TO CART</CustomButton>
    </div>
  )

}

const maptDispatchToProps = dispatch => ({
  addItems: items => dispatch(addItems(items))
})

export default connect(null, maptDispatchToProps)(CollectionItem);
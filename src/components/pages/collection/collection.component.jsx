
import React from "react";
import './collection.style.scss';
import { selectCollection } from "../../../redux/shop/shop-selector";
import { connect } from "react-redux";
import CollectionItem from '../../collection-item/collectionItem.component'

const CollectionPage = ({ collection }) => {
const {title, items} = collection
return (
    <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
        {
            items.map(items => 
                <CollectionItem key={items.id} items={items}/>
            )
        }
    </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
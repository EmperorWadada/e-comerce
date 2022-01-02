
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopData } from "../../redux/shop/shop-selector";
import './collection-overview.style.scss'
import CollectionPrview from "../preview-collection/collection-preview";

const CollectionOverview = ({ shopData }) => (
    <div className="collection-overview">
        {
          shopData.map(({id, ...otherCollections}) => (
              <CollectionPrview key={id} {...otherCollections}/>
          ))
        }
    </div> 
)


const mapStateToProps = createStructuredSelector({
    shopData: selectShopData
})


export default connect(mapStateToProps)(CollectionOverview);
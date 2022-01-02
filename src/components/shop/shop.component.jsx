import React from 'react'
import CollectionOverview from '../collections-overview/collection-overview.componet'
import './shop.style.scss'
import { Route } from 'react-router'
import CollectionPage from '../pages/collection/collection.component';
import { firestore } from '../firebase/firebase.util';
// import { connect } from 'react-redux';
// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';

// import { convertCollectionsSnpashotToMap, firestore } from '../firebase/firebase.util'
// import withSpinner from '../with-spinner/with-spinner.component';

// const collectionsOverviewWithSpinner = withSpinner(CollectionOverview);
// const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {


  unsubscribeFromSnapshot = null; 

  componentDidMount() {
    // const {fetchCollectionsStartAsync} = this.props;
    // fetchCollectionsStartAsync();

    const collectionRef = firestore.collection('user')

    // Using async way of getting firebase datae
    // collectionRef.get().then(snapShot => {.....})
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   console.log(snapshot);

    //   Function used to read data from firebase store
    //   convertCollectionsSnpashotToMap(snapshot)
    //   this.setState({loading: false})
    });
  }

  render() {
    const {match} = this.props
    return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      {/* <Route exact path={`${match.path}`} render={(props) => <CollectionOverview isLoadin={loading} {...otherProps}/>} /> */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    )
  }
  
  
} 

// const mapDispatchToProps = dispatch => createStructuredSelector({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// })

// export default connect(null, mapDispatchToProps)(ShopPage);

export default ShopPage;
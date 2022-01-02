import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.style';

const withSpinner = wrappedComponent => ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ): (<wrappedComponent {...otherProps}/>)
} 


export default withSpinner;
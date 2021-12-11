import React from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory-selector';
import {createStructuredSelector } from 'reselect';

const Directory = ({ directory })=> {
  return (
    <div className='directory-menu'>
      {directory.map(sections => (
        <MenuItem key={sections.id} {...sections}/>
      ))}
    </div>
  )

}

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
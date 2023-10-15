import React from 'react'
import {v4} from 'uuid'
import NxtSlidesContext from '../../context'
import './index.css'

const AddNewBtn = () => {
  const {addNewItem, activeIndex, changeActiveTab} = React.useContext(
    NxtSlidesContext,
  )
  const onClickAddButton = () => {
    const item = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    }
    addNewItem(item)
    changeActiveTab(activeIndex + 1)
  }
  return (
    <button type="button" className="add-new-button" onClick={onClickAddButton}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
        alt="new plus icon"
        className="plus-icon"
      />
      New
    </button>
  )
}
export default AddNewBtn

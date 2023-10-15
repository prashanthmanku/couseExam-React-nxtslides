import React from 'react'
import NxtSlidesContext from '../../context'
import './index.css'

const SlideItem = props => {
  const {details, serialNumber} = props
  const {heading, description} = details

  const {changeActiveTab, activeIndex} = React.useContext(NxtSlidesContext)

  const isActive = activeIndex === serialNumber - 1
  const activeStyling = isActive ? 'active-styling' : ''

  const onClickSlideTab = () => {
    changeActiveTab(serialNumber - 1)
  }
  return (
    <li
      className={`slide-list-item ${activeStyling}`}
      onClick={onClickSlideTab}
      testid={`slideTab${serialNumber}`}
    >
      <p className="slide-number">{serialNumber}</p>
      <div className="slide-tab">
        <h1 className="tab-heading">{heading}</h1>
        <p className="tab-description">{description}</p>
      </div>
    </li>
  )
}
export default SlideItem

import React from 'react'
import './index.css'
import NxtSlidesContext from '../../context'
import Slide from '../Slide'
import SlideItem from '../SlideItem'

const SlidesList = () => {
  const {slidesList} = React.useContext(NxtSlidesContext)
  return (
    <div className="slides-container">
      <ol className="slides-list">
        {slidesList.map((eachSlide, index) => (
          <SlideItem
            details={eachSlide}
            key={eachSlide.id}
            serialNumber={index + 1}
          />
        ))}
      </ol>
      <Slide />
    </div>
  )
}
export default SlidesList

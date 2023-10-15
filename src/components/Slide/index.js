import React, {useState} from 'react'
import './index.css'
import NxtSlidesContext from '../../context'

const Slide = () => {
  const {
    slidesList,
    activeIndex,
    changeHeading,
    ChangeDescription,
  } = React.useContext(NxtSlidesContext)

  const [headingActive, setheadingActive] = useState(true)
  const [descriptionActive, setdescriptionActive] = useState(true)

  const onClickHeading = () => {
    setheadingActive(false)
  }

  const onClickDescription = () => {
    setdescriptionActive(false)
  }

  const onBlurDescription = event => {
    if (event.target.value === '') {
      ChangeDescription('Description')
    }

    setdescriptionActive(true)
  }

  const onBlurHeading = event => {
    if (event.target.value === '') {
      changeHeading('Heading')
    }

    setheadingActive(true)
  }

  const onChangeHeading = event => {
    changeHeading(event.target.value)
  }

  const onChangeDescription = event => {
    ChangeDescription(event.target.value)
  }

  const tabDetails = slidesList[activeIndex]
  const {description, heading} = tabDetails

  return (
    <div className="slide-view-container">
      <div className="slide-container">
        {headingActive ? (
          <h1 onClick={onClickHeading} className="slide-heading">
            {heading}
          </h1>
        ) : (
          <input
            type="text"
            value={heading}
            onChange={onChangeHeading}
            onBlur={onBlurHeading}
            className="slide-heading-input"
          />
        )}
        {descriptionActive ? (
          <p onClick={onClickDescription} className="slide-description">
            {description}
          </p>
        ) : (
          <input
            type="text"
            value={description}
            onChange={onChangeDescription}
            className="slide-description-input"
            onBlur={onBlurDescription}
          />
        )}
      </div>
    </div>
  )
}

export default Slide

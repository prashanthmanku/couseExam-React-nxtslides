import React from 'react'

const NxtSlidesContext = React.createContext({
  slidesList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  ChangeDescription: () => {},
})

export default NxtSlidesContext

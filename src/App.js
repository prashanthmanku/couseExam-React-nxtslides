import {useState} from 'react'
import Header from './components/Header'
import AddNewBtn from './components/AddNewBtn'
import SlidesList from './components/SlidesList'

import NxtSlidesContext from './context'
import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Prashanth MPA',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here

const App = () => {
  const [slidesList, setSlidesList] = useState(initialSlidesList)
  const [activeIndex, setactiveIndex] = useState(0)

  const changeActiveTab = index => {
    setactiveIndex(index)
  }
  const addNewItem = item => {
    // const newList = insert(slidesList, activeIndex + 1, item)
    const newList = [
      ...slidesList.slice(0, activeIndex + 1),
      item,
      ...slidesList.slice(activeIndex + 1),
    ]
    setSlidesList(newList)
  }

  const changeHeading = value => {
    const newList = slidesList.map((each, index) => {
      if (activeIndex === index) {
        return {...each, heading: value}
      }
      return each
    })
    setSlidesList(newList)
  }
  const ChangeDescription = v => {
    const newList = slidesList.map((each, index) => {
      if (activeIndex === index) {
        return {...each, description: v}
      }
      return each
    })
    setSlidesList(newList)
  }

  return (
    <NxtSlidesContext.Provider
      value={{
        slidesList,
        activeIndex,
        changeActiveTab,
        addNewItem,
        changeHeading,
        ChangeDescription,
      }}
    >
      <Header />
      <AddNewBtn />
      <SlidesList />
    </NxtSlidesContext.Provider>
  )
}

export default App

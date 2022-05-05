import React, { useEffect, useState } from 'react'

import Grid from './components/Grid'
import NavBar from './components/NavBar'

import './App.scss'

/**
 * App Component
 */

export function App() {
  const [row, setRows] = useState(1)
  const [column, setColumn] = useState(1)
  const [showNav, setShowNav] = useState(false)
  const [gridHeight, setGridHeight] = useState(0)
  const [gridWidth, setGridWidth] = useState(0)

  const onChange = (event) => {
    //prevent from entering numbers greater than 10
    if (event.target.value < 1 || event.target.value > 10) return 
    if (event.target.name === 'rows') {
      setRows(Number(event.target.value))
    } else {
      setColumn(Number(event.target.value))
    }
  }

  const setGridSize = () => {
    // selecting classname of Grid component and setting height and width
    const element = document.querySelector('.grid-element') as HTMLElement 
    setGridHeight(element.offsetHeight)
    setGridWidth(element.offsetWidth)
  }

  useEffect(() => {
    setGridSize()
     // this will add a event listener if window is resized, 
    //  it will only add a event listener if an event listener has not been added before
    if(!('resize' in window)){
      window.addEventListener('resize', setGridSize)
    }
    // remove event listener when the component unmounts.
    return () => {
      window.removeEventListener('resize', setGridSize)
    }
  }, [row, column, showNav])

  return (
    <div className='App'>
      <NavBar
        onChange={onChange}
        column={column}
        row={row}
        showNav={showNav}
        toggleNav={setShowNav}
      />
      <div className='container'>
        {new Array(row).fill(1).map((_, i) => (
          <div className='grid-container' key={i}>
            {new Array(column).fill(1).map((_, index) => (
              <Grid height={gridHeight} width={gridWidth} key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

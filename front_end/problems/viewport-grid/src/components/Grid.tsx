import React from 'react'

interface Props {
  height: number
  width: number
}

const Grid = ({ height, width }: Props) => {
  return (
    <div className='grid-element'>
      <span>{height}</span>
      <span>X</span>
      <span>{width}</span>
    </div>
  )
}

export default Grid

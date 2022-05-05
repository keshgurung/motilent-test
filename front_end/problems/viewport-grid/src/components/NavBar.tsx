import React from 'react'
import classNames from 'classnames'

import { Burger } from '../icons/index'

interface Props {
  onChange: (event: any) => void
  row: number
  column: number
  showNav: boolean
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar = ({ onChange, row, column, toggleNav, showNav }: Props) => {
  return (
    <div className='NavBar'>
      <button
        onClick={() => toggleNav(!showNav)}
        className={classNames(showNav ? 'NavButtonActive' : 'NavButton')}
      >
        <Burger />
      </button>

      {showNav && (
        <div className='InputFields'>
          <label>Rows</label>
          <input
            type='number'
            name='rows'
            onChange={onChange}
            min={1}
            max={10}
            value={row}
          />

          <label>Columns</label>
          <input
            type='number'
            name='columns'
            onChange={onChange}
            min={1}
            max={10}
            value={column}
          />
        </div>
      )}
    </div>
  )
}

export default NavBar

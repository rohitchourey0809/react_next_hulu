import React from 'react'

const HeaderItem = ({Icon,title}) => {
  return (
    <div >
      <Icon height={48}/>
      <p  group-hover="opacity-100">{title}</p>
    </div>
  )
}

export default HeaderItem

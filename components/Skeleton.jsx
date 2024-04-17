import React from 'react'

const Skeleton = ({width, height, color}) => {
  return (
    <div className={`${width} ${height} bg-${color}-300 shadow-lg animate-pulse rounded-full`}></div>
  )
}

export default Skeleton
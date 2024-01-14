import React from 'react'

interface Props {
  num: number
}

const Content: React.FC<Props> = (props) => {
  const { num } = props
  return (
    <>
      {[...new Array(100).keys()].map((_, i) => <div key={num * 100 + i}>Hello World{num * 100 + i}</div>)}
    </>
  )
}

export default Content
import React from 'react'

function Headers(props: any) {
  return (
    <div onClick={() => {
      props.handleNumbers()
    } }>
      { props.names }
    </div>
  )
}

export default Headers

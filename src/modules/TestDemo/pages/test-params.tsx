import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@/hooks'
function TestParams () {
  const l = useLocation()
  const p: any = useParams()
  console.log(l)
  console.log(p)
  const query = useQuery<string>()
  console.log(query)
  return (
    <div>
      1233 TestParams + id:{p.id}
    </div>
  )
}

export default TestParams

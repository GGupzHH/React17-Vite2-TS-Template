import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import PrivateRoute from '@/router/privateRoute'

const router = () => (
  <Router>
    <PrivateRoute/>
  </Router>
)

export default router

import React, { FC, useEffect } from 'react'
import {
	Outlet
  } from "react-router-dom"
import './App.less'

const App:FC = () => {

  return (
    <div className="App">
			<Outlet />
    </div>
  )
}

export default App

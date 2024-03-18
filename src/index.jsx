import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App'
import Profile from './pages/Profile'
import ProfileDetails from "./pages/ProfileDetails"

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  }, 
  {
    path : '/profile',
    element : <Profile/>
  }, {
    path : '/profileDetails/:username',
    element : <ProfileDetails/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	<RouterProvider router={router}/>
	</React.StrictMode>
)
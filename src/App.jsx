import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className='max-w-screen-xl mx-auto'>
        <div className='text-center flex gap-4 justify-center mt-4'>
          <Link to="/login">Login Page</Link>
          <Link to="/signup">SignUp Page</Link>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App

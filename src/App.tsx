
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import CustomCursor from './components/CustomCursor'

const App = () => {

  return (
    <div>
      <CustomCursor />
      <Header />
      <Outlet />
    </div>
  )
}

export default App
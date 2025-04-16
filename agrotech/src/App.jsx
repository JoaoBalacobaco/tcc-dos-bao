import './App.css'
import Login from './Components/Login'
import { Menu } from './Components/menu'
import Rodape from './Components/rodape'


function App() {

  return (
    <div className="App">
      <Menu></Menu>
      <Login/>
      <Rodape></Rodape>
    </div>
  )
}

export default App

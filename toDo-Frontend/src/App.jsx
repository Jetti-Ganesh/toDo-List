import { TodoList } from './components/todolist'
import Login from './components/login'
import { Route, Router, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/todos' element={<TodoList></TodoList>} />
      </Routes>

    </>
  )
}

export default App

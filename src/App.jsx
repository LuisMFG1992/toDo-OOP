import './App.css'
import Card from './Components/Card'
import ContainerLayout from './Components/ContainerLayout'
import Header from './Components/Header'
import InputSearch from './Components/InputSearch'
import TaskCard from './Components/TaskCard'

function App() {
  return (
    <ContainerLayout>
      <Card>
        <Header />
        <InputSearch />
        <TaskCard />
      </Card>
    </ContainerLayout>
  )
}

export default App

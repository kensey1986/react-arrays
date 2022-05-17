import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Body } from './Components/Body/Body'
import { Header } from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  const miArray = [
    { id: 1, nombre: ' juan', edad: 55, sueldo: 55000 },
    { id: 2, nombre: ' laura', edad: 40, sueldo: 15000 },
    { id: 3, nombre: ' carlos', edad: 25, sueldo: 34000 },
    { id: 4, nombre: ' luis', edad: 35, sueldo: 84000 },
  ]


  return (
    <div className="App">
      {
        miArray.map((cliente) => {
          return (
            <div key={cliente.id}>
              <Body
                cliente={cliente}
              />
              <Header
                nombre={cliente.nombre}
              />
            </div>
          )

        })
      }
    </div>
  )
}

export default App

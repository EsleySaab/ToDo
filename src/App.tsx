import styles from "./App.module.css"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

import "./global.css"

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      
      <div>
        <Tasks />
      </div>
    </div>
  )
}

export default App

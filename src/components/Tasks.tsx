import styles from "./Tasks.module.css"

import { PlusCircle } from "phosphor-react"

export function Tasks() {
  return (
    <form className={styles.tasks}>
      <div className={styles.content}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          <span>Criar</span>
          <PlusCircle />
        </button>
      </div>
    </form>
  )
}

import styles from "./Tasks.module.css"

import { PlusCircle } from "phosphor-react"

export function Tasks() {
  return (
    <div>
      <form className={styles.tasks}>
        <div className={styles.content}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            <span>Criar</span>
            <PlusCircle size={18} />
          </button>
        </div>
      </form>

      <div className={styles.list}>
        <div className={styles.listContent}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div className={styles.secondListContent}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>
    </div>
  )
}

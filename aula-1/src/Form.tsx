import { useState } from 'react'

export const Form = () => {
  const [task, setTask] = useState('')

  return (
    <div>
      <form className="formulario">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" disabled={!task}>
          Add
        </button>
      </form>
      <div className="formulario">
        <h3>Texto digitado: {task}</h3>
      </div>
    </div>
  )
}

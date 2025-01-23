import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";
// import { TodoContext } from "../contexts/TodoContext.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.todoContext = this.props.todoContext
    this.todoContext.subscribe(this.updateTodos.bind(this))
    this.todos = []
  }

  updateTodos(todos) {
    this.todos = todos
    this.render()
    console.log(this.todos)
  }

  render() {
    const todoListElement = document.createElement('ul')
    todoListElement.className = "todo-list"

    todoListElement.innerHTML = ""

    this.todos.forEach(todo => {
      const todoItem = new TodoItem({ todo })
      todoListElement.appendChild(todoItem.render())
    })

    if (this.element) {
      this.element.replaceWith(todoListElement)
    }

    this.element = todoListElement
    
    return this.element;
  }
}
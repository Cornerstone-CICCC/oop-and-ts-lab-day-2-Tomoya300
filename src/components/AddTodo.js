import { Component } from "../common/Component.js";
// import { TodoContext } from "../contexts/TodoContext.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.todoContext = this.props.todoContext
    this.handleAddTodo = this.handleAddTodo.bind(this) 
  }

  handleAddTodo() {
    const inputElement = this.element.querySelector("input")
    const todoDescription = inputElement.value
    if (todoDescription) {
      this.todoContext.addTodo(todoDescription)
      inputElement.value = ""
    }
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    addElement.querySelector("#todo-add-btn").addEventListener("click", () => {
      this.handleAddTodo()
    })
    // const input = addElement.querySelector("#todo-input")
    // const button = addElement.querySelector("#todo-add-btn")

    // button.addEventListener("click", () => {
    //   const todoDescription = input.value.trim()
    //   if (todoDescription) {
    //     this.todoContext.addTodo(todoDescription)
    //     input.value = ""
    //     console.log("button clicked")
    //   }
    // })
    this.element = addElement

    return this.element;
  }
}
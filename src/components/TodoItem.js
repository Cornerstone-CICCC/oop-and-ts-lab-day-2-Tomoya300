import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleMark = this.handleMark.bind(this)
  }

  handleMark() {
    this.props.todo.status = !this.props.todo.status

    // const updatedElement = this.render()
    // this.element = ""
    // this.element.replaceWith(updatedElement)
    // this.element = updatedElement

    if (this.element) {
      this.element.className = `todo-item ${this.props.todo.status ? "completed" : ""}`

      const button = this.element.querySelector(".complete-btn");
      button.textContent = this.props.todo.status ? "Mark Incomplete" : "Mark Complete"
    }
  }

  handleDelete() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element)
    }
  }

  render() {
    if (this.element) {
      this.element.className = `todo-item ${this.props.todo.status ? "completed" : ""}`;
      this.element.querySelector("span").textContent = this.props.todo.description;

      const button = this.element.querySelector(".complete-btn");
      button.textContent = this.props.todo.status ? "Mark Incomplete" : "Mark Complete";

      return this.element; 
    }

    const todoElement = document.createElement('li')
    todoElement.className = `todo-item ${this.props.todo.status ? "completed" : ""}`
    todoElement.innerHTML = `
      <span>${this.props.todo.description}</span>
      <button class="complete-btn">${this.props.todo.status ? "Mark Incomplete" : "Mark Complete"}</button>
      <button class="delete-btn">Delete</button>
    `

    // todoElement.querySelector(".delete-btn").addEventListener("click", () => {
    //   todoElement.innerHTML = ""
    // })

    todoElement.querySelector(".delete-btn").addEventListener("click", () => {
      console.log("delete btn clicked")
      this.handleDelete()
    })

    todoElement.querySelector(".complete-btn").addEventListener("click", () => {
      console.log("complete btn clicked")
      this.handleMark()
    })

    return todoElement;
  }
}
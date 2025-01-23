export class TodoContext {
    constructor() {
        this.todos = []
        this.listeners = []
    }

    getTodo() {
        return this.todos
    }

    addTodo(todo) {
        this.todos.push({
            id: Math.random() * (9000 - 1000) + 1000,
            description: todo,
            status: false
        })
        this.notifyListeners()
        console.log(this.todos)
    }

    subscribe(listener) {
        this.listeners.push(listener)
        // console.log(this.listeners)
        console.log('Listener subscribed:', listener);
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.todos))
    }
}
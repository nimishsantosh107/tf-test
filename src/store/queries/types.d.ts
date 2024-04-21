export type ExampleApiTodo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};

export type ExampleApiTodos = {
    todos: ExampleApiTodo[];
    total: number;
    skip: number;
    limit: number;
};

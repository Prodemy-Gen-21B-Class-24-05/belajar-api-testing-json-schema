export const singleTodoSchema = {
	type: 'object',
	required: ['userId', 'id', 'title', 'completed'],
	properties: {
		userId: { type: 'number' },
		id: { type: 'number' },
		title: { type: 'string' },
		completed: { type: 'boolean' },
	}
}

export const listTodosSchema = {
	type: 'array',
	items: singleTodoSchema
}
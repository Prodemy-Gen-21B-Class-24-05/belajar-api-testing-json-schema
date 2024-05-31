import axios from "axios"
import expect from '../lib/expect.js'
import { singleTodoSchema, listTodosSchema } from "../schemas/todos-schema.js"

describe('TODOS API TESTING', function () {
	it('get single todo', async function () {
		const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

		expect(res.data).to.be.jsonSchema(singleTodoSchema)
	})

	it('get list of todos', async function () {
		const res = await axios.get('https://jsonplaceholder.typicode.com/todos')

		expect(res.data).to.be.jsonSchema(listTodosSchema)
	})
})
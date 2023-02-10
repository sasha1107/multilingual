/**
 * Todo 타입 선언
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료여부
 * @property {string?} [category] - 카테고리
 * @property {Tag[]?} [tags] - 태그들
 */


/**
 * Tag 타입 선언
 * @typedef {Object} Tag
 * @property {number} id - 아이디
 * @property {string} content - 내용
 */

class TodoList {
	/**
	 * Create todo list.
	 * @param {Todo[]} todoList - 투두 리스트
	 */
	constructor(todoList) {
		// ...
	}

	/**
	 * 할 일을 추가할 수 있다.
	 * 내용없이 추가할 수 없다.
	 * @param {string} content - 내용
         * @param {string} [category] - 카테고리
         * @param {Tag[]} [tags] - 태그들
	 */
	createTodo(content, category, [tags]) {
		// ...
	}

	/**
	 * 파라미터를 넘기지 않으면 모든 할 일을 조회할 수 있다.
	 * ID를 기반으로 특정 할 일을 조회할 수 있다.
	 * @param {string} [id] - 아이디
	 */
	readTodo(id) {
		// ...
	}

	/**
	 * ID를 제외한 모든 속성을 수정할 수 있다.
	 * 특정 할 일의 특정 태그를 수정할 수 있다.
	 * @param {number} id - 아이디
	 * @param {string} [content] - 내용
	 * @param {boolean} [isDone] - 완료여부
	 * @param {string} [category] - 카테고리
	 * @param {Tag[]} [tags] - 태그들
	 */
	updateTodo(id, tagId) {
		// ...
	}

	/**
	 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
         * id를 넘기지 않으면 모든 할 일을 제거할 수 있다. 
	 * @param {number} [id] - 아이디
	 */
	deleteTodo(id) {
		// ...
	}

	/**
	 * 특정 할 일의 특정 태그나 모든 태그를 제거할 수 있다.
         * 두 번째 인자로 태그를 넘기지 않으면 모든 태그를 제거한다.
	 * @param {number} id - 아이디
         * @param {Tag[]} [tags] - 태그들
	 */
	deleteTags(id, tags) {
		// ...
	}
}

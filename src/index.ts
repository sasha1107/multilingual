interface ITodo {
	id: number;
	content: string;
	isDone: boolean;
	category: string;
	tags: ITag[];
}

interface ITag {
	id: number;
	content: string;
}


// 할 일을 추가할 수 있다.
// 내용없이 추가할 수 없다.
function createTodo(content: string, category?: string, tags?: ITag[]): void {}


// 파라미터를 넘기지 않으면 모든 할 일을 조회할 수 있다.
// ID를 기반으로 특정 할 일을 조회할 수 있다.
function readTodo (id?: string) {}


// ID를 제외한 모든 속성을 수정할 수 있다.
// 특정 할 일의 특정 태그를 수정할 수 있다.
function updateTodo(id: number, content?: string, isDone?: boolean, category?: string, tags?: ITag[]) {}


// ID를 기반으로 특정 할 일을 삭제할 수 있다.
// id를 넘기지 않으면 모든 할 일을 제거할 수 있다. 
function deleteTodo (id?: number): void {}


// 특정 할 일의 특정 태그나 모든 태그를 제거할 수 있다.
// 두 번째 인자로 태그를 넘기지 않으면 모든 태그를 제거한다.
function deleteTags (id: number, tags?: ITag[]): void {}
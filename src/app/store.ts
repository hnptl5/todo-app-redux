import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODO } from './actions';
import { IAppState } from './store';
import { tassign } from 'tassign';


export interface IAppState {
    todos: any[];
    lastUpdate: Date
}

export const INITIAL_STATE: IAppState =
    {
        todos: [],
        lastUpdate: null
    }

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO:

            var newTodo = { id: state.todos.length + 1, title: action.title };
            return tassign(state, {
                todos: state.todos.concat(newTodo),
                lastUpdate: new Date()
            });

        case TOGGLE_TODO:

            var todo = state.todos.find(t => t.id = action.id );
            var index = state.todos.indexOf(todo);
            return tassign(state, {
                todos: [    
                    ...state.todos.slice(0, index),
                    tassign(todo, 
                        { isCompleted: !todo.isCompleted}
                    ), 
                    ...state.todos.slice(index + 1) 
                ],
                lastUpdate: new Date()
            });
        
        case REMOVE_TODO:
            return tassign(state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            });

        case CLEAR_TODO:
            return tassign(state, {
                todos: [],
                lastUpdate: new Date()
            });

    }


    return state;
}   
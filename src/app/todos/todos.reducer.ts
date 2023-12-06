import { createReducer, on } from '@ngrx/store';
import { crear, toggle, modificartxt, borrar, toggleAll, deleteCompleted } from './todos.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
    new Todo("Salvar al mundo", false),
    new Todo("Vencer a Thanos", false),
    new Todo("Comprar traje de Deadpool", false),
    new Todo("Probar martillo de Thor", false)
];

const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, { texto, completado }) => [...state, new Todo(texto, completado)]),
    on(deleteCompleted, (state) => state.filter( todo => !todo.completado)),
    on(toggle, (state, { id }) => {

        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),
    on(modificartxt, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        });
    }),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggleAll, (state, { completado}) => {
        return state.map(todo => {
                return {
                    ...todo,
                    completado: completado
                }
        });
    }),
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}

import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crea Todo',
    props<{ texto: string, completado: boolean }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const modificartxt = createAction(
    '[TODO] Modifica texto todo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll Todo',
    props<{ completado: boolean}>()
);

export const deleteCompleted = createAction(
    '[TODO] Borrar completados'
);
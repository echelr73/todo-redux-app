import { createAction, props } from "@ngrx/store";

//export const filtrosValidos = ["all","completados","pendientes"];
export enum filtrosValidos {
   All = "all",
   Completados = "completados",
   Pendientes = "pendientes"
};

export const setFiltro = createAction(
    '[Filtro] Set filtro',
    props<{ filtro: string }>()
);
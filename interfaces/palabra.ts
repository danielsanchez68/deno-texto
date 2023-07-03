import { ObjectId } from "../deps.ts";

export interface Ipalabra {
    _id: string,
    palabra: string,
    timestamp: number,
}

export interface Ifactory {
    getNext_Id?(palabras: Ipalabra[]):number;
    obtenerPalabras():Promise<Ipalabra[]>;
    guardarPalabra(palabra:Ipalabra):Promise<Ipalabra>;
}


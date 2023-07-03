import { Ipalabra, Ifactory } from '../../interfaces/palabra.ts'

import CnxMongo from '../DB.ts'

class PalabrasMongoDAO implements Ifactory {
    constructor() {}

    async obtenerPalabras(): Promise<Ipalabra[]> {
        try {
            //return this.palabras
            if(!CnxMongo.conectada) return await Promise.resolve([])
            return await CnxMongo.db.collection<Ipalabra>('palabras').find({}).toArray();

        }
        catch(error) {
            console.log('error en obtenerPalabras', error)
            return await Promise.resolve([])
        }
    }

    async guardarPalabra(palabra:Ipalabra):Promise<Ipalabra> {
        try {
            await CnxMongo.db.collection<Ipalabra>('palabras').insertOne(palabra);
            return await Promise.resolve(palabra)
        }
        catch(error) {
            console.log('error en guardarPalabra:',error)
            return await Promise.resolve(palabra)
        }
    }
}

export default PalabrasMongoDAO
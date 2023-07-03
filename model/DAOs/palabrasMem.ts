
import { Ipalabra, Ifactory } from '../../interfaces/palabra.ts'

class PalabrasMemDAO implements Ifactory {
    palabras : Ipalabra[] 

    constructor() {
        this.palabras = []
    }

    getNext_Id(palabras: Ipalabra[] ):number {
        const lg = palabras.length
        return lg? parseInt(palabras[lg-1]._id) + 1 : 1
    }

    async obtenerPalabras(): Promise<Ipalabra[]> {
        try {
            return await Promise.resolve(this.palabras)
        }
        catch(error) {
            console.log('error en obtenerPalabras', error)
            return await Promise.resolve([])
        }
    }

    async guardarPalabra(palabra:Ipalabra):Promise<Ipalabra> {
        try {
            const _id = this.getNext_Id(this.palabras)
            const timestamp = Date.now()
            palabra._id = _id.toString()
            palabra.timestamp = timestamp
            this.palabras.push(palabra)

            return await Promise.resolve(palabra)
        }
        catch(error) {
            console.log('error en guardarPalabra:',error)
            return await Promise.resolve(palabra)
        }
    }
}

export default PalabrasMemDAO
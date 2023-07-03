import PalabrasFactoryDAO from '../model/DAOs/palabrasFactory.ts'
import { Ipalabra, Ifactory } from '../interfaces/palabra.ts'

class ApiPalabras {
    PalabrasDAO : Ifactory

    constructor() {
        this.PalabrasDAO = PalabrasFactoryDAO.get('MONGO')
    }

    async obtenerPalabras():Promise<string> { 
        const palabras:Ipalabra[] = await this.PalabrasDAO.obtenerPalabras()
        return palabras.map((p:Ipalabra) => p.palabra).join(' ')
    }

    async guardarPalabra(palabra:Ipalabra):Promise<Ipalabra> { 
        return await this.PalabrasDAO.guardarPalabra(palabra) 
    }
}

export default ApiPalabras

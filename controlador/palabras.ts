// deno-lint-ignore-file
import ApiPalabras from '../api/palabras.ts'
import {Ipalabra} from '../interfaces/palabra.ts'

class ControladorPalabras {
    apiPalabras : ApiPalabras
    constructor() {
        this.apiPalabras = new ApiPalabras()
    }

    obtenerPalabras = async (_:any,res:any) => {
        try {
            const palabras:string = await this.apiPalabras.obtenerPalabras()
            res.send(palabras)
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }

    guardarPalabra = async (req:any,res:any) => {
        try {
            const palabra:Ipalabra = req.body
            const palabraGuardada = await this.apiPalabras.guardarPalabra(palabra)
            res.json(palabraGuardada)
        }
        catch(error) {
            console.log('error obtenerPalabras', error)
        }
    }
}

export default ControladorPalabras

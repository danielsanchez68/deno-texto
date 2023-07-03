import { Router } from "../deps.ts";
const router = Router();

import ControladorPalabras from '../controlador/palabras.ts'

class RouterPalabras {
    controladorPalabras : ControladorPalabras

    constructor() {
        this.controladorPalabras = new ControladorPalabras()
    }

    start() {
        router.get('/', this.controladorPalabras.obtenerPalabras)
        router.post('/', this.controladorPalabras.guardarPalabra)

        return router
    }
}

export default RouterPalabras
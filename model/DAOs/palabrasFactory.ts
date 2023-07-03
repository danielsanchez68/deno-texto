import PalabrasMemDAO from './palabrasMem.ts'
import PalabrasMongoDAO from './palabrasMongo.ts'
import { Ifactory } from '../../interfaces/palabra.ts'


class PalabrasFactoryDAO {
    static get(tipo='MONGO') : Ifactory {
        switch(tipo) {
            case 'MEM' :  return new PalabrasMemDAO()
            case 'MONGO':  return new PalabrasMongoDAO()
            default :  return new PalabrasMemDAO()
        }
    }
}

export default PalabrasFactoryDAO
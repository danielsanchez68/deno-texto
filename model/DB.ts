import { MongoClient,Database, config } from "../deps.ts";

class CnxMongo {
    static conectada = false
    static db:Database
    static async conectar() {
        try {
            const client = new MongoClient();

            console.log("Conectando a la base de datos...");
            // Connecting to a Local Database
            //await client.connect("mongodb://127.0.0.1:27017");
            //await client.connect(config().STRCNX || Deno.env.get('STRCNX') || 'mongodb://127.0.0.1:27017');
            const strcnx = Deno.env.get('STRCNX') || 'mongodb://127.0.0.1:27017'
            console.log(`Deno.env.get('STRCNX'):`, Deno.env.get('STRCNX'))
            console.log('strcnx:', strcnx)
            await client.connect(strcnx);

            // Connecting to a Mongo Atlas Database
            /* await client.connect({
                db: "<db_name>",
                tls: true,
                servers: [
                    {
                    host: "<db_cluster_url>",
                    port: 27017,
                    },
                ],
                credential: {
                    username: "<username>",
                    password: "<password>",
                    db: "<db_name>",
                    mechanism: "SCRAM-SHA-1",
                },
            }); */

            // Connect using srv url
            /* await client.connect(
                "mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>?authMechanism=SCRAM-SHA-1",
            ); */

            console.log("Base de datos conectada!");
            this.db = client.database("test");
            this.conectada = true;
        } catch (error) {
        console.log(error.message);
        }
    }
}

export default CnxMongo;

'use strict';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './cors-configuration.js';

const BASE_URL = '/kinalSportAdmin/v1';

//configuracion de mi aplicacion
//se almacena en una funcion para que pueda ser exportada o usada al crear la instancia de la aplicacion
const middlewares = (app) => {
    // 
    app.use(express.urlencoded({extended: false, limit: '10mb'}));
    // Permite correr en nuestro programa json 
    app.use(express.json({limit: '10mb'}));
    // Usa las configuraciones de Cors
    app.use(cors(corsOptions));
    // Permite mostrar errores
    app.use(morgan('dev'));
}

//funcion para iniciar el servidor
const initServer = async (app) => {
    // creacion de la instancia de la aplicacion
     app = express();
    const PORT = process.env.PORT || 3001;
    
    try {
        // Configuracion de los middlewares 
        middlewares(app)
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`)
            console.log(`Base URL: http://localhost:${PORT}${BASE_URL}`)
        });

        // Primera ruta 
        app.get(`${BASE_URL}/health`,(req, res) => {
            res.status(200).json(
                {
                status: 'ok',
                service: 'KinalSport Admin',
                version: '1.0.0'
            }
        );
        });
        
    } catch (error) {
        console.log(error);
    }
}

export { initServer };
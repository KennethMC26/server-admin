const corsOptions = {
    // Corregido: origin (estaba como orgin)
    origin: true, 
    
    // Permite el uso de credenciales/cookies
    credentials: true,
    
    // Corregido: Es mejor usar un array o asegurar que los métodos coincidan
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    
    // Corregido: Authorization (estaba como Authotization con 't')
    allowedHeaders: ["Content-Type", "Authorization"]
}

export { corsOptions }
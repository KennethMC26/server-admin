'use strict';

import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'La fecha es requerida']
    },
    time: {
        type: String, // Ejemplo: "14:00"
        required: [true, 'La hora es requerida']
    },
    duration: {
        type: Number, // En horas
        default: 1,
        min: [1, 'La duración mínima es de 1 hora']
    },
    field: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Field',
        required: [true, 'Debe asignar una cancha']
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: [true, 'Debe asignar un equipo a la reserva']
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['PENDIENTE', 'CONFIRMADA', 'CANCELADA'],
        default: 'PENDIENTE'
    }
}, { timestamps: true });

export default mongoose.model('Reservation', reservationSchema);
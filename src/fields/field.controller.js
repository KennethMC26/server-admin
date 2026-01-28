// importamos las dependencias
import Field from "./field.model.js";

// controles
export const getFields = async (req, res) => {
    try {
        // datos que vienen de la query
        const { page = 1, limit = 10, isActive } = req.query;

        // variables de filtro
        const filter = { isActive };

        // opciones de paginacion
        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            sort: { createdAt: -1 }
        }

        // realizar la consulta al schema field
        const fields = await Field.find(filter)
            .limit(options.limit)
            .skip((page - 1) * limit)
            .sort(options.sort);

        // conteo de registros
        const total = await Field.countDocuments(filter);

        // respuesta
        res.status(200).json({
            success: true,
            data: fields,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalRecords: total,
                limit: limit
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener los campos',
            error: error.message
        });
    }
}



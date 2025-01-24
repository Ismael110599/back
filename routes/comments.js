const express = require('express');
const {
    getAllComments,
    createComment,
    updateComment,
    deleteComment
} = require('../controllers/commentsControllers');
const router = express.Router();
// Obtener todos los comentarios
router.get('/', getAllComments);
// Crear un nuevo comentario
router.post('/', createComment);
// Actualizar un comentario existente
router.put('/:id', updateComment);
// Eliminar un comentario
router.delete('/:id', deleteComment);

module.exports = router;

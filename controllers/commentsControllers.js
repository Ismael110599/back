const Comment = require('../models/commentsModels');

// Obtener todos los comentarios
const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo comentario
const createComment = async (req, res) => {
    try {
        const { descripcion } = req.body;
        const comment = new Comment({ descripcion });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un comentario existente
const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion } = req.body;
        const comment = await Comment.findByIdAndUpdate(id, { descripcion }, { new: true });
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un comentario
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllComments,
    createComment,
    updateComment,
    deleteComment
};

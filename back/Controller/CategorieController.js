const modelCategory = require("../Model/Categorie");

module.exports = {
    create: async function(req, res) {
        try {
            const categorie = new modelCategory(req.body);
            const item = await categorie.save();
            res.status(201).json({
                status: 201,
                message: "success",
                data: item,
            });
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    },

    getAll: async function(req, res) {
        try {
            const categories = await modelCategory.find({}).exec();
            res.status(200).json({
                status: 200,
                message: "List of categories",
                data: categories,
            });
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    },

    update: async function(req, res) {
        try {
            const updatedCategory = await modelCategory.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!updatedCategory) {
                res.status(404).json({
                    status: 404,
                    message: "Category not found",
                    data: null,
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Category updated",
                    data: updatedCategory,
                });
            }
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    },

    deletecategory: async function(req, res) {
        try {
            const deletedCategory = await modelCategory.findByIdAndDelete(req.params.id);
            if (!deletedCategory) {
                res.status(404).json({
                    status: 404,
                    message: "Category not found",
                    data: null,
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Category deleted successfully",
                    data: deletedCategory,
                });
            }
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    },

    getById: async function(req, res) {
        try {
            const category = await modelCategory.findById(req.params.id);
            if (!category) {
                res.status(404).json({
                    status: 404,
                    message: "Category not found",
                    data: null,
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Category found successfully",
                    data: category,
                });
            }
        } catch (err) {
            res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    }
};

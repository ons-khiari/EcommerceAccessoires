const PanierModel=require('../Model/Panier')

module.exports = {
    create: async function(req, res) {
        try {
            const panier = new PanierModel(req.body);
            const item = await  panier.save();
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
            const panier= await PanierModel.find({}).exec();
            res.status(200).json({
                status: 200,
                message: "Liste de Produit acheté",
                data: panier,
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
            const updatedpanier= await PanierModel.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!updatedpanier) {
                res.status(404).json({
                    status: 404,
                    message: "Panier not updated",
                    data: null,
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Panier updated",
                    data:updatedpanier,
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

    deletepanier: async function(req, res) {
        try {
            const deletedPanier = await PanierModel.findByIdAndDelete(req.params.id);
            if (!deletedPanier) {
                res.status(404).json({
                    status: 404,
                    message: "Panier Vide",
                    data: null,
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Commande deleted successfully",
                    data: deletedPanier,
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
            const Panier= await PanierModel.findById(req.params.id);
            if (!Panier) {
                res.status(404).json({
                    status: 404,
                    message: "Panier vide ",
                    data: null,
                });
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Commande found successfully",
                    data: Panier,
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

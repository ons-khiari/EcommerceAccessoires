const ProductModel=require('../Model/Product')
  
  
module.exports={
    
     create : async (req, res) => {
        try {
            if (!req.files || req.files.length <= 0) {
              req.body["gallerie"] = [];
            } else {
              req.body["gallerie"] = req.files.map(function (file) {
                return { name: file.filename };
              });
            }
            const Product = new ProductModel(req.body);
            const item = await Product.save();
        
        
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
            const Product = await ProductModel.find({}).exec();
            res.status(200).json({
                status: 200,
                message: "List of Product",
                data: Product,
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
            const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            
            if (!updatedProduct) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found",
                    data: null,
                });
            }
            
            
            if (req.files && req.files.length > 0) {
                updatedProduct.gallerie = req.files.map(function(file) {
                    return { name: file.filename };
                });
            }
            
            await updatedProduct.save();

            return res.status(200).json({
                status: 200,
                message: "Product updated",
                data: updatedProduct,
            });
        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    },
    deleteproduct: async function(req, res) {
        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
            
            if (!deletedProduct) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found",
                    data: null,
                });
            }
            
            return res.status(201).json({
                status: 201,
                message: "Deleted successfully",
                data: deletedProduct,
            });
        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    },
   getById: async function(req, res) {
        try {
            const product = await ProductModel.findById(req.params.id);
            
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: "Product not found",
                    data: null,
                });
            }
            
            return res.status(201).json({
                status: 201,
                message: "Product found",
                data: product,
            });
        } catch (err) {
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
                data: null,
                error: err.message,
            });
        }
    }, 
    
    
    
      

   
}
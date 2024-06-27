const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js")

const app = express();

//middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute)

// //Add Product API
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// //Get list of product API
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// //Get the detail of one product by its id
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// //Update the product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) res.status(404).json({ message: "Product not found" });
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// //Delete the product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) res.status(404).json({ message: "Product not found" });

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://dsawanoffice8:oqO1kwPZIMdBGdLb@backenddb.rac4jwd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Database connection is failed");
  });

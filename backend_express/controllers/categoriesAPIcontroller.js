const { Transaction_category } = require("../database/models");


const categoriesAPIcontroller={
    getAllCategories:async (req, res) => {
        try {
            const categories = await Transaction_category.findAll();
            res.header("Access-Control-Allow-Origin", "*");
            res.json(categories);
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    },
    newCategory:async (req, res) => {
        try {
            Transaction_category.create({
                name: req.body.name,
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send({ message: "Transaction category created" });
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    }
}
module.exports=categoriesAPIcontroller;
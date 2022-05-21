const {Transactions} = require("../database/models");

const transactionsAPIcontroller={
    getAllTransactions: async (req, res) => {
    const transactions = await Transactions.findAll() 
    // const transactionsEdited = transactions.map((transaction)=>{

    // })   

    return res.status(200).json({
        transactions:transactions,
        status:200
    });



    }
}
module.exports=transactionsAPIcontroller;
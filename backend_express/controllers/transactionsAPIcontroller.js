const {
    Transactions,
    Transaction_category,
    Transaction_type
} = require("../database/models");

const transactionsAPIcontroller={
    getAllTransactions: async (req, res) => {
            let userId = 1; //RECIBIR POR PARAM DESDE EL FRONT
            const transactions = await Transactions.findAll({
                where: {
                    user_id: userId,
                },
                // include: ["transaction_type"],
                include: ["transaction_category","transaction_type"]
            });
            const transactionsEdited = transactions.map((transaccion)=>{
                return{
                    id:transaccion.id,
                    concept: transaccion.concept,
                    amount:transaccion.amount,
                    date:transaccion.date,
                    category:transaccion.transaction_category.name,
                    type:transaccion.transaction_type.name
                }
            })
            res.header("Access-Control-Allow-Origin", "*");
            return res.status(200).json({
                transactions:transactionsEdited,
                status:200
            });
    },
    getLastTen:async (req, res) => {
        try {
            let userId = 1; //RECIBIR POR PARAM DESDE EL FRONT
            let operations = await Transactions.findAll({
                where: {
                    user_id: userId,
                },
                order: [["date", "DESC"]],
                include: ["transaction_type", "transaction_category"],
                limit: 10,
            });

            let operationsJSON = [];
            operations.forEach((operation) => {
                let newOperation = {
                    id: operation.id,
                    concept: operation.concept,
                    amount: operation.amount,
                    date: operation.date,
                    operation_type:
                        operation.transaction_type !== null
                            ? operation.transaction_type.name
                            : "Sin tipo",
                    operation_category:
                        operation.transaction_category !== null
                            ? operation.transaction_category.name
                            : "Sin categoría",
                };

                operationsJSON.push(newOperation);
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.json(operationsJSON);
        } catch (error) {
            res.send(error);
        }
    },
    getBalance:async (req, res) => {
        try {
            let userId = 1; //RECIBIR POR PARAM DESDE EL FRONT
            let incomesTransactions = await Transactions.findAll({
                where: {
                    type_id: 1,
                    user_id: userId,
                },
            });
            let expensesTransactions = await Transactions.findAll({
                where: {
                    type_id: 2,
                    user_id: userId,
                },
            });

            let incomes = 0;
            let expenses = 0;
            incomesTransactions.forEach((incomeOperation) => {
                incomes += parseFloat(incomeOperation.amount);
            });
            expensesTransactions.forEach((expenseOperation) => {
                expenses += parseFloat(expenseOperation.amount);
            });

            let balance = incomes - expenses;
            
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200);
            return res.json(balance.toFixed(2));
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    },
    getTransactionsByType:async (req, res) => {
        let id = req.params.id;
        let userId = 1; //RECIBIR POR PARAM DESDE EL FRONT
        try {
            let operations = await Transactions.findAll({
                include: ["transaction_type", "transaction_category"],
                where: {
                    type_id: id,
                    user_id: userId,
                },
            });
            let operationsJSON = [];
            operations.forEach((operation) => {
                let newOperation = {
                    id: operation.id,
                    concept: operation.concept,
                    amount: operation.amount,
                    date: operation.date,
                    operation_type:
                        operation.transaction_type !== null
                            ? operation.transaction_type.name
                            : "Sin tipo",
                    operation_category:
                        operation.transaction_category !== null
                            ? operation.transaction_category.name
                            : "Sin categoría",
                };

                operationsJSON.push(newOperation);
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.json(operationsJSON);
        } catch (error) {
            res.send(error);
        }
    },
    getTransactionsTypes: async (req, res) => {
        try {
            const transactionTypes = await Transaction_type.findAll();
            res.header("Access-Control-Allow-Origin", "*");
            res.json(transactionTypes);
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    },
    getTransactionsByCategory:async (req, res) => {
        let id = req.params.id !== "null" ? req.params.id : null;
        let userId = 1; //RECIBIR POR PARAM DESDE EL FRONT
        try {
            let transactions = await Transactions.findAll({
                include: ["transaction_type", "transaction_category"],
                where: {
                    cat_id: id,
                    user_id: userId,
                },
            });
            
            let transactionsJSON = [];
            transactions.forEach((transaction) => {
                let newTransaction = {
                    id: transaction.id,
                    concept: transaction.concept,
                    amount: transaction.amount,
                    date: transaction.date,
                    operation_type:
                        transaction.transaction_type !== null
                            ? transaction.transaction_type.name
                            : "Sin tipo",
                    operation_category:
                        transaction.transaction_category !== null
                            ? transaction.transaction_category.name
                            : "Sin categoría",
                };

                transactionsJSON.push(newTransaction);
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.json(transactionsJSON);
        } catch (error) {
            res.send(error);
        }
    },
    getTransaction:async (req, res) => {
        try {
            let id = req.params.id;
            
            let transaction = await Transactions.findByPk(id, {
                include: ["transaction_type", "transaction_category"],
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.json(transaction);
        } catch (error) {
            res.send(error);
        }
    },
    newTransaction:async (req, res) => {
        try {
            let category =
                req.body.cat_id !== ""
                    ? req.body.cat_id
                    : null;

            Transactions.create({
                concept: req.body.concept,
                amount: parseFloat(req.body.amount),
                date: req.body.date,
                user_id: req.body.user_id,
                cat_id: category,
                type_id: req.body.type_id,
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send({ message: "Operation created" });
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    },
    editTransaction:async (req, res) => {
        try {
            const opId = req.query.id;
            let category =
                req.body.cat_id !== ""
                    ? req.body.cat_id
                    : null;
            
            await Transactions.update(
                {
                    concept: req.body.concept,
                    amount: parseFloat(req.body.amount),
                    date: req.body.date,
                    cat_id: category,
                },
                {
                    where: {
                        id: opId,
                    },
                }
            );
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send({ message: "Operation updated" });
        } catch (error) {
            res.status(400);
            res.send(error);
        }
    },
    deleteTransaction:async (req, res) => {
        try {
            
            await Transactions.destroy({
                where: {
                    id: req.body.id,
                },
            });
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).send({ message: "Operation deleted" });
        } catch (error) {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(400);
            res.send(error);
        }
    }
    
}
module.exports=transactionsAPIcontroller;
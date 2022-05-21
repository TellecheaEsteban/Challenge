module.exports =(sequelize, dataTypes)=>{
    let alias = 'Transactions';
    let cols = {
        concept:{
            type:dataTypes.STRING(255)
        },
        amount:{
            type:dataTypes.DECIMAL(6,2)
        },
        date:{
            type:dataTypes.DATE
        }
    };
    let config={
        tableName:"transactions",
        timestamps: false
    }
        const Transactions =sequelize.define(alias,cols,config);

        Transactions.associate=(models)=>{
            Transactions.belongsTo(models.Users,{
                as:"users",
                foreignKey:"user_id"
            }),
            Transactions.belongsTo(models.Transaction_category,{
                as:"transaction_category",
                foreignKey:"cat_id"
            }),
            Transactions.belongsTo(models.Transaction_type, {
                as:"transaction_type",
                foreignKey:"type_id"
            })
        }

        return Transactions;
       }
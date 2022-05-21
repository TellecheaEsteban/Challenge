module.exports =(sequelize, dataTypes)=>{
    let alias = 'Transaction_category';
    let cols = {
       name:{
           type:dataTypes.STRING(255)
       }
    };
    let config={
        tableName:"transaction_category",
        timestamps: false
    }
        const Transaction_category =sequelize.define(alias,cols,config);
        Transaction_category.associate=(models)=>{
            Transaction_category.hasMany(models.Transactions,{
                as:"transaction",
                foreignKey:"cat_id"
            })
        }
        return Transaction_category;
       }
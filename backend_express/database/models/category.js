module.exports =(sequelize, dataTypes)=>{
    let alias = 'Transaction_category';
    let cols = {
       name:{
           type:dataTypes.VARCHAR(255)
       }
    };
    let config={
        tableName:"transaction_category",
        timestamps: false
    }
        const Transaction_category =sequelize.define(alias,cols,config);
   
        return Transaction_category;
       }
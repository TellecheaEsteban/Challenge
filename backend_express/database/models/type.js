module.exports =(sequelize, dataTypes)=>{
    let alias = 'Transaction_type';
    let cols = {
       name:{
           type:dataTypes.VARCHAR(255)
       }
    };
    let config={
        tableName:"transaction_type",
        timestamps: false
    }
        const transaction_type =sequelize.define(alias,cols,config);
   
        return transaction_type;
       }
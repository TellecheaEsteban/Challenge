module.exports =(sequelize, dataTypes)=>{
    let alias = 'Transaction_type';
    let cols = {
       name:{
           type:dataTypes.STRING(255)
       }
    };
    let config={
        tableName:"transaction_type",
        timestamps: false
    }
        const transaction_type =sequelize.define(alias,cols,config);
        transaction_type.associate=(models)=>{
            transaction_type.hasMany(models.Transactions,{
                as:"transaction",
                foreignKey:"type_id"
            })
        }
        return transaction_type;
}
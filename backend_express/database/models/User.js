module.exports =(sequelize, dataTypes)=>{
    let alias = 'Users';
    let cols = {
       name:{
           type:dataTypes.STRING(255)
       },
       email:{
           type:dataTypes.STRING(255)
       },
       password:{
           type:dataTypes.STRING(255)
       }
    };
    let config={
        tableName:"users",
        timestamps: false
    }
        const Users =sequelize.define(alias,cols,config);
        Users.associate=(models)=>{
            Users.hasMany(models.Transactions,{
                as:"transaction",
                foreignKey:"user_id"
            });
        };
        return Users;
       }
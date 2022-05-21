module.exports =(sequelize, dataTypes)=>{
    let alias = 'Users';
    let cols = {
       name:{
           type:dataTypes.VARCHAR(255)
       },
       email:{
           type:dataTypes.VARCHAR(255)
       },
       password:{
           type:dataTypes.VARCHAR(255)
       }
    };
    let config={
        tableName:"users",
        timestamps: false
    }
        const Users =sequelize.define(alias,cols,config);
   
        return Users;
       }
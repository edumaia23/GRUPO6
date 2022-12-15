module.exports = (sequelize, DataTypes) => {

    let companhias = sequelize.define(
        "Companhias",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            
        },
        {
            tableName: "companhias",
            timestamps: false,
            paranoid: false
        }
    )
    
    companhias.associate = (models)=>{
        companhias.belongsTo(models.Voos, {foreignKey:'voos_id', as: 'voo'});
        // publicacao.belongsToMany(
        //     models.Usuario,
        //     {
        //         as: 'curtidores',
        //         through: 'curtidas',
        //         foreignKey: 'publicacoes_id',
        //         otherKey: 'usuarios_id',
        //         timestamps: false
        //     }
        //);
    }

    return companhias;

}
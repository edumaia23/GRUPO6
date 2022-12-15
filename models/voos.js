module.exports = (sequelize, DataTypes) => {

    let voos = sequelize.define(
        "Voos",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            data_hora_partida:{
                type: DataTypes.DATE(6)
            },
            data_hora_chegada:{
                type: DataTypes.DATE(6),
        
            },
            aeroportos_origem_id: {
                type: DataTypes.INTEGER
            },
            aeroportos_destino_id: {
                type: DataTypes.INTEGER
            },
            companhias_id: {
                type: DataTypes.INTEGER
            },
          
        },
        {
            tableName: "voos",
            timestamps: false,
            paranoid: false
        }
    )
    
    // publicacao.associate = (models)=>{
    //     publicacao.belongsTo(models.Usuario, {foreignKey:'usuarios_id', as: 'autor'});
    //     publicacao.belongsToMany(
    //         models.Usuario,
    //         {
    //             as: 'curtidores',
    //             through: 'curtidas',
    //             foreignKey: 'publicacoes_id',
    //             otherKey: 'usuarios_id',
    //             timestamps: false
    //         }
    //     );
    // }

    return voos;

}
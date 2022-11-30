module.exports = (sequelize, DataTypes) => {

    let aeroportos = sequelize.define(
        "Aeroportos",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            cidade:{
                type: DataTypes.STRING,
                allowNull: false
            },
            sigla:{
                type: DataTypes.STRING,
                allowNull: false
            },
            nome: {
                type: DataTypes.INTEGER
                allowNull: false
            },
            
        },
        {
            tableName: "aeroportos",
            timestamps: false,
            paranoid: false
        }
    )
    
    aeroportos.associate = (models)=>{
        aeroportos.belongsTo(models.Voos, {foreignKey:'voos_id', as: 'voo'});
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

    return aeroportos;

}
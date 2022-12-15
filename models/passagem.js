module.exports = (sequelize, DataTypes) => {

    let passagem = sequelize.define(
        "Passagem",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            preco:{
                type: DataTypes.DECIMAL(9,2)
            },
            assento:{
                type: DataTypes.STRING,
                allowNull: false
            },
            classe: {
                type: DataTypes.INTEGER
            },
            voos_id: {
                type: DataTypes.INTEGER
            },
            pedidos_id: {
                type: DataTypes.INTEGER
            },
            passageiro_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: "passagens",
            timestamps: false,
            paranoid: false
        }
    )
    
    passagem.associate = (models)=>{
        passagem.belongsTo(models.Voos, {foreignKey:'voos_id', as: 'voo'});
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

    return passagem;

}
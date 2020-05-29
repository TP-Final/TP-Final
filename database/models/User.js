module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        birth_date: {
            type: DataTypes.DATE
        },
        email: {
            type: DataTypes.STRING(45)
        },
        password: {
            type: DataTypes.STRING(45)
        }
    };

    let config = {
        tableName: "usuarios",
        underscored: true, 
        timestamps: true
    };

    const User = sequelize.define("User", cols, config);

    User.associate = function(models) {
        User.hasMany(models.Review, {
            as: "Review",
            foreignKey: "usuario_id"
        });
    }

    return User;

}

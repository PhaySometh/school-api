export default (sequelize, DataTypes) =>
    sequelize.define('Teacher', {
        name: DataTypes.STRING,
        department: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    });

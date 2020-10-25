module.exports = (sequelize, DataTypes) => {
    const BNCCs = sequelize.define('BNCCs', {
      createdAt: {
           field: 'created_at',
           type: DataTypes.DATE,
       },
       updatedAt: {
           field: 'updated_at',
           type: DataTypes.DATE,
       },
       code: DataTypes.STRING,
       description: DataTypes.STRING,
    });
    return BNCCs;
  };
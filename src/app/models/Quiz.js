module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define('Quiz', {
      nome: DataTypes.STRING,
      data_inicial: DataTypes.DATE,
      data_final: DataTypes.DATE,
      list_questions: DataTypes.JSON,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      createdAt: {
           field: 'created_at',
           type: DataTypes.DATE,
       },
       updatedAt: {
           field: 'updated_at',
           type: DataTypes.DATE,
       }  
    },
    );
    return Quiz;
  };
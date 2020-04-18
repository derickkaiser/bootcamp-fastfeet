import { Model, Sequelize } from 'sequelize';

class Deliveryman extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            avatar_id: Sequelize.INTEGER,
            email: Sequelize.STRING,

        },{
            sequelize,
        })
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    }
}

export default Deliveryman;
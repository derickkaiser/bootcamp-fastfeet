import { Model, Sequelize } from 'sequelize';

class Recipient extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            cep: Sequelize.STRING,
            street: Sequelize.STRING,
            number: Sequelize.STRING,
            complement: Sequelize.STRING,
            city: Sequelize.STRING,
            state: Sequelize.STRING,
        },{
            sequelize,
        })
    }
}

export default Recipient;
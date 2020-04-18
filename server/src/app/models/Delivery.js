import { Model, Sequelize } from 'sequelize';

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        recipient_id: Sequelize.INTEGER,
        deliveryman_id: Sequelize.INTEGER,
        signature_id: Sequelize.INTEGER,
        product_name: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        status: {
          type: Sequelize.VIRTUAL,
          get() {
            if (this.canceled_at) {
              // CANCELADO
              return 'CANCELADO';
            }
            if (this.start_date && !this.end_date) {
              // RETIRADA
              return 'RETIRADO';
            }
            if (this.start_date && this.end_date) {
              // ENTREGUE
              return 'ENTREGUE';
            }
            if (!this.start_date && !this.end_date) {
              // PENDENTE
              return 'PENDENTE';
            }
          },
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipient_id',
      as: 'recipient',
    });
    this.belongsTo(models.Deliveryman, {
      foreignKey: 'deliveryman_id',
      as: 'deliveryman',
    });
    this.belongsTo(models.File, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
  }
}

export default Delivery;

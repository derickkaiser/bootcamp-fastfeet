import Mail from '../../lib/Mail';

class DeliverReadyMail {
  get key() {
    return 'DeliveryReadyMail';
  }

  async handle({ data }) {
    const { delivery, deliveryman } = data;
    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Encomenda disponibilizada para retirada',
      template: 'delivery_ready',
      context: {
        deliveryman: deliveryman.name,
        product_name: delivery.product_name,
        recipient_name: deliveryman.name,
      },
    });
  }
}

export default new DeliverReadyMail();

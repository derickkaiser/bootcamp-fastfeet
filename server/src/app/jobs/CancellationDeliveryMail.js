import Mail from '../../lib/Mail';

class CancellationDeliveryMail {
  get key() {
    return 'CancellationDeliveryMail';
  }

  async handle({ data }) {
    const { delivery, deliveryProblem } = data;
    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: 'Encomenda com problemas foi cancelada',
      template: 'cancelled_delivery',
      context: {
        deliveryman: delivery.deliveryman.name,
        delivery_id: delivery.id,
        product_name: delivery.product_name,
        recipient_name: delivery.recipient.name,
        problem_description: deliveryProblem.description,
      },
    });
  }
}

export default new CancellationDeliveryMail();

import faker from 'faker';
import { factory } from 'factory-girl';

import Recipient from '../src/app/models/Recipient';

factory.define('Recipient', Recipient, {
    name: faker.name.findName(),
    cep: faker.address.zipCode,
    street:faker.address.streetName,
    city: faker.address.city,
    state: faker.address.stateAbbr,
    number:faker.random.number,
    
});

export default factory;
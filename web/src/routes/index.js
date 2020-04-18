import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';

import Delivery from '../pages/Delivery';
import DeliveryEdit from '../pages/Delivery/Edit';

import Recipient from '../pages/Recipient';
import RecipientEdit from '../pages/Recipient/Edit';

import Deliveryman from '../pages/Deliveryman';
import DeliverymanEdit from '../pages/Deliveryman/Edit';

import DeliveryProblem from '../pages/DeliveryProblem';

// import Matriculation from '../pages/Matriculation';
// import MatriculationCreate from '../pages/Matriculation/Create';
// import MatriculationEdit from '../pages/Matriculation/Edit';

// import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />

      <Route path="/deliveries" exact component={Delivery} isPrivate />
      <Route path="/deliveries/edit" exact component={DeliveryEdit} isPrivate />
      <Route path="/deliveries/create" exact component={DeliveryEdit} isPrivate />

      <Route path="/recipients" exact component={Recipient} isPrivate />
      <Route path="/recipients/edit" exact component={RecipientEdit} isPrivate />
      <Route path="/recipients/create" exact component={RecipientEdit} isPrivate />

      <Route path="/delivery-problems" exact component={DeliveryProblem} isPrivate />

      <Route path="/deliverymen" exact component={Deliveryman} isPrivate />
      <Route path="/deliverymen/edit" exact component={DeliverymanEdit} isPrivate />
      <Route path="/deliverymen/create" exact component={DeliverymanEdit} isPrivate />

    </Switch>
  );
}

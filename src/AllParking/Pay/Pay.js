import React from 'react';

import { useEffect, useState } from "react";

import { useHistory } from "react-router";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Button } from '@mui/material';
const STRIPE_KEY = process.env.REACT_APP_STRIPE;


const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
 

  const onToken = (token) => {
    setStripeToken(token);
  };


   
   
    return (
        <div>
             <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
             
              
              token={onToken}
              stripeKey={STRIPE_KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;
import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import axios from "axios";

type Props = {
  price: number;
};

const StripeCheckoutButton = ({ price }: Props) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_7I8KGVYOZtTMUPgnye9Cj1Tz00vCcdQAcv";

  const onToken = (token: Token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.error("Payment error: ", JSON.parse(err));
        alert(
          "There was an issue with your payment. Please sure you use the provided credit cart",
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

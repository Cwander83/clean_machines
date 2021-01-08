// import React from "react";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement
// } from "@stripe/react-stripe-js";
// import TextField from "@material-ui/core/TextField";
// import StripeInput from "./StripeInput";

// function StripeTextField(props) {
//   const {
//     InputLabelProps,
//     labelErrorMessage,
//     stripeElement,
//     InputProps = {},
//     inputProps,
//     ...other
//   } = props;

//   return (
//     <TextField
//       fullWidth
//       InputLabelProps={{
//         ...InputLabelProps,
//         shrink: true
//       }}
//       InputProps={{
//         ...InputProps,
//         inputProps: {
//           ...inputProps,
//           ...InputProps.inputProps,
//           component: stripeElement
//         },
//         inputComponent: StripeInput
//       }}
//       {...other}
//     />
//   );
// }

// export function StripeTextFieldNumber(props) {
//   return (
//     <StripeTextField
//       label="Credit Card Number"
//       stripeElement={CardNumberElement}
//       {...props}
//     />
//   );
// }

// export function StripeTextFieldExpiry(props) {
//   return (
//     <StripeTextField
//       label="Expires"
//       stripeElement={CardExpiryElement}
//       {...props}
//     />
//   );
// }

// export function StripeTextFieldCVC(props) {
//   return (
//     <StripeTextField
//       label="CVC Code"
//       stripeElement={CardCVCElement}
//       {...props}
//     />
//   );
// }

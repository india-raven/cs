const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === process.env.STRIPE_PUBLISHABLE_KEY;

// "production"
//   ? "pk_live_MY_PUBLISHABLE_KEY"
//   : "pk_test_MY_PUBLISHABLE_KEY";

export default STRIPE_PUBLISHABLE;

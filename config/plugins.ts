export default ({ env }) => ({
  "users-permissions": {
    config: {
      ratelimit: {
        enabled: true,
        interval: { min: 5 },
        max: 5,
      },
      register: {
        allowedFields: ["firstName", "lastName", "phone", "dateOfBirth", "gender", "avatar", "addresses", "defaultShippingAddress", "defaultBillingAddress", "marketingConsent", "preferences", "notes"],
      },
      email: {
        config: {
          provider: "sendmail",
          providerOptions: {},
          settings: {
            defaultFrom: "no-reply@apexshoes.com",
            defaultReplyTo: "support@apexshoes.com",
          },
        },
      },
    },
  },
});

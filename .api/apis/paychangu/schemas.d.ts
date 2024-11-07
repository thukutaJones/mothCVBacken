declare const LevelReference: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["amount", "currency", "first_name", "callback_url", "return_url"];
        readonly properties: {
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount to charge the customer.";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency to charge in. [ 'MWK', 'USD' ]";
                readonly default: "MWK";
            };
            readonly tx_ref: {
                readonly type: "string";
                readonly description: "Your transaction reference. This MUST be unique for every transaction.";
            };
            readonly first_name: {
                readonly type: "string";
                readonly description: "This is the first_name of your customer.";
            };
            readonly last_name: {
                readonly type: "string";
                readonly description: "This is the last_name of your customer. (optional)";
            };
            readonly callback_url: {
                readonly type: "string";
                readonly description: "This is your IPN url, it is important for receiving payment notification. Successful transactions redirects to this url after payment. {tx_ref} is returned, so you don't need to pass it with your url";
            };
            readonly return_url: {
                readonly type: "string";
                readonly description: "Once the customer cancels or after multiple failed attempts, we will redirect to the return_url with the query parameters tx_ref and status of failed. (optional)";
            };
            readonly email: {
                readonly type: "string";
                readonly description: "This is the email address of your customer. Transaction notification will be sent to this email address (optional)";
            };
            readonly meta: {
                readonly type: "string";
                readonly description: "You can pass extra information here. (optional)";
            };
            readonly uuid: {
                readonly type: "string";
                readonly description: "(optional)";
            };
            readonly customization: {
                readonly properties: {
                    readonly title: {
                        readonly type: "string";
                        readonly description: "(optional)";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "(optional)";
                    };
                };
                readonly required: readonly [];
                readonly type: "object";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Hosted payment session generated successfully."];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly event: {
                            readonly type: "string";
                            readonly examples: readonly ["checkout.session:created"];
                        };
                        readonly checkout_url: {
                            readonly type: "string";
                            readonly examples: readonly ["https://api.paychangu.com/payment/929878718321"];
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly tx_ref: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ae041eae-6abd-4602-a949-56fbd65c29fe"];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly examples: readonly ["MWK"];
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [800];
                                };
                                readonly mode: {
                                    readonly type: "string";
                                    readonly examples: readonly ["live"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["pending"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["failed"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["currency is required"];
                };
                readonly data: {
                    readonly type: "string";
                    readonly examples: readonly ["null"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { LevelReference };

declare module "resend" {
  type EmailPayload = {
    from: string;
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
  };

  export class Resend {
    constructor(apiKey?: string);
    emails: {
      send(payload: EmailPayload): Promise<unknown>;
    };
    contacts: {
      create(payload: {
        email: string;
        audienceId?: string;
        firstName?: string;
        lastName?: string;
        unsubscribed?: boolean;
      }): Promise<unknown>;
    };
  }
}

declare module '@paystack/inline-js' {
    export default class PaystackPop {
      newTransaction(options: {
        key: string;
        email: string;
        amount: number;
        currency?: string;
        ref?: string;
        label?: string;
        metadata?: Record<string, unknown>;
        channels?: string[];
        callback?: (response: { reference: string; status: string; message: string }) => void;
        onSuccess?: (response: {
          reference: string;
          trans?: string;
          transaction: string;
          message: string;
          status: 'success';
        }) => void;
        onCancel?: () => void;
      }): void;
    }
  }
  
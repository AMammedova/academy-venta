export interface ContactType {
  title: string;
  description: string;
  address: string;
  form: {
    interested: string;
    options: {
      hrManagement: string;
      digitalMarketing: string;
      frontendDevelopment: string;
      backendDevelopment: string;
      turism: string;
    };
    name: string;
    email: string;
    phone: string;
    communicationMethod: string;
    emailOption: string;
    phoneOption: string;
    message: string;
    sendMessage: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    errors: {
      nameRequired: string;
      emailInvalid: string;
      emailRequired: string;
      phoneInvalid: string;
      phoneRequired: string;
      messageMinLength: string;
      messageRequired: string;
    };
  };
}
export class RegisterVM {
    username!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    nationality!: string;
    cin!: string;
  
    constructor(data?: Partial<RegisterVM>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }
  
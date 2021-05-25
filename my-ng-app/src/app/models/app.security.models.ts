export class RegisterUser {
    constructor(
        public Id:number,
        public UserName:string,
        public Password:string,
        public Email:string
    ){}
}

export class AuthUser {
    constructor(
        public UserName:string,
        public Password:string
    ){}
}

export class ResponseObject {
    constructor(
        public message:string,
        public token:string,
        public response:any
    ){}
}
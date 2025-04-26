// import { Admin } from "../types/Admin";
import { Client, Item } from "../types/Client";

// for client
export interface SignInRequest { 
    login? : string;
    password? : string;
}
export interface SignInResponse {
    message? : string;
    client : Client;
    jwt : string;
}

export interface SignUpRequest { 
    userName? : string;
    email? : string;
    password? : string;
    card_Id? : string;
}
export interface SignUpResponse {
    message? : string;
}

export interface GetRequest {
    jwt : string;
}
export interface GetResponse {
    message? : string;
    box : Item[];
}

// for Admin
export interface AffectRequest {
    customer_Id? : string;
}

export interface AffectResponse {
    message? : string;
}

export interface RetRequest {
    customer_Id? : string;
    box? : Item[];
    entry_date? : Date;
    processing_date? : Date;
    total_amount? : number;
}

export interface RetResponse {
    message? : string;
}


// export interface AdminSignUpRequest {
//     name : string;
//     email : string;
//     password : string;
// }
// export interface AdminSignUpResponse {
//     admin : Pick<Admin, '_id'>;
//     jwt : string; 
// }
// export interface AdminSignInRequest {
//     login : string;
//     password : string;
// }
// export interface AdminSignInResponse {
//     admin : Pick<Admin, '_id'>;
//     jwt : string; 
// }
// export interface WithdrawRequestByPId {
//     personId : string;
//     fees : number;
// }
// export interface WithdrawResponseByPId {
//     message? : string;
// }
// export interface WithdrawRequestByCardId {
//     cardId : string;
//     fees : number;
// }
// export interface WithdrawResponseByCardId {
//     message? : string;
// }
// export interface SignOutRequestByPId {
//     personId : string;
// }
// export interface SignOutResponseByPId {
//     message? : string;
// }
// export interface SignOutRequestByCardId {
//     cardId : string;
// }
// export interface SignOutResponseByCardId {
//     message? : string;
// }
// export interface ResetPasswordRequest { 
//     newPassword : string;
// }
// export interface ResetPasswordResponse {
//     message? : string;
// }
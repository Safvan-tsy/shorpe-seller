export interface User {
    _id:string;
    name:string;
    email:string;
    isAdmin:boolean;
    isSeller:boolean;
    seller:Seller;
    password?:string;
    confirmPassword?:string;
}

export interface Seller {
    _id:string;
    userId:string;
    name: string;
    image: string;
    email: string;
    isAdmin: boolean;
    isSeller:boolean;
    phone: string;
    pan: string;
    displayName: string;
}

export interface UpdateProfileData {
    _id: string;
     name:string;
     email:string;
     password:string;
     confirmPassword:string;
     isAdmin:boolean;
}


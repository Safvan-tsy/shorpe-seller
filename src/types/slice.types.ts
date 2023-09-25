import { Seller } from '../types/seller.types';

export interface AuthState {
  sellerInfo: Seller | null
  token: string | null;
}

export interface loginReq {
  email:string ,
  password:string
}

export interface loginRes {
  token: string 
  data: { 
    seller:Seller 
  }, 
}


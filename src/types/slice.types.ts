import { Seller } from '../types/seller.types';

export interface AuthState {
  sellerInfo: Seller | null
  token: string | null;
}
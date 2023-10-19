import { User } from "./seller.types";

export interface orderType { 
    orderItems: CartItem[]; 
    shippingAddress: any; 
    paymentMethod: string; 
    itemsPrice: string; 
    shippingPrice: string; 
    taxPrice: string; 
    totalPrice: string; 
    token?: string; 
    createdAt?:any;
    _id?:string;
    product?:string;
    isDelivered?:boolean; 
    deliveredAt?:any;
    user?:User;
    isPaid?:boolean;
    paidAt?:any;
}

export interface CartItem {
    _id: string;
    name: string;
    price: number;
    qty: number;
    countInStock: number;
    product?: string;
    totalPrice?: string;
    taxPrice?: string;
    shippingPrice?: string;
    itemsPrice?: string;
    image?: string;
}

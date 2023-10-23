import { User } from "./seller.types";

export interface ProductType {
    _id: string;
    name: string;
    price: number;
    rating: number;
    description: string;
    numReviews: number;
    countInStock: number;
    brand: string;
    category: string;
    status: string;
    image:string[];
    districts?: any;
    pincodes?: any;
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

export interface orderType {
    orderItems: CartItem[];
    shippingAddress: any;
    paymentMethod: string;
    itemsPrice: string;
    shippingPrice: string;
    taxPrice: string;
    totalPrice: string;
    token?: string;
    createdAt?: any;
    _id?: string;
    product?: string;
    isDelivered?: boolean;
    deliveredAt?: any;
    user?: User;
    isPaid?: boolean;
    paidAt?: any;
}

export interface ProductAddForm {
    name: string;
    price: number;
    brand: string;
    category: string;
    description: string;
    delivery:string;
    countInStock: number;
    status: string;
    image:string[];
    districts?: any;
    pincodes?: any;
}

export interface GetProductListRes {
    products: ProductType[],
    totalPages: number,
    currentPage: number,
    productsCount: number
}

export interface GetOrderListRes {
   orders: orderType[],
    totalPages: number,
    currentPage: number,
    productsCount: number
}

export interface orderType{
    userId: string;
    sellerId: string;
    status: string;
    statusDescription: string;
    orderItems: [
        {
            name: string;
            qty: number;
            image: string;
            price: number;
            product: string
        }
    ];
    shippingAddress: {
        address: string;
        city: string;
        postalCode: string;
        country: string
    };
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    paymentMethod?: string;
    paymentResult?: {
        id: string;
        status: string;
        updateTime: string;
        email: string
    };
    isPaid?: boolean;
    paidAt?: Date;
    isDelivered?: boolean;
    deliveredAt?: Date;
    otp?: string;
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

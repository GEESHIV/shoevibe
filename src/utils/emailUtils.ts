import emailjs from '@emailjs/browser';

// Your EmailJS credentials
const EMAIL_SERVICE_ID = "service_sy0iwlq";
const EMAIL_TEMPLATE_ID = "template_gghddpc";
const EMAIL_PUBLIC_KEY = "dh0T3wLoF6SIxdS36";

interface OrderEmailData {
    productName: string;
    productPrice: number;
    quantity: number;
    size: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    deliveryAddress: string;
    pincode: string;
    orderId: string;
}

export const sendOrderEmail = async (orderData: OrderEmailData) => {
    try {
        // Format the total price
        const totalPrice = (orderData.productPrice * orderData.quantity).toLocaleString('en-IN');

        const response = await emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            {
                product_name: orderData.productName,
                size: orderData.size,
                quantity: orderData.quantity,
                total_price: totalPrice,
                customer_name: orderData.customerName,
                customer_email: orderData.customerEmail || 'Not provided',
                customer_address: orderData.deliveryAddress,
                customer_phone: orderData.customerPhone,
                customer_pincode: orderData.pincode,
                order_id: orderData.orderId,
                order_date: new Date().toLocaleString('en-IN', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                })
            },
            EMAIL_PUBLIC_KEY
        );

        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
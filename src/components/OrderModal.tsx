import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { saveOrder } from '../utils/orderUtils';
import { sendOrderEmail } from '../utils/emailUtils';
import toast from 'react-hot-toast';
import type { Product } from '../types/Product';

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOrderSuccess: (orderDetails: {
    orderId: string;
    productName: string;
    productPrice: number;
    customerName: string;
  }) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose, onOrderSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    pincode: '',
    size: '',
    quantity: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Available shoe sizes
  const shoeSizes = ['6', '7', '8', '9', '10', '11', '12'];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error('Please enter your full name');
      return false;
    }
    
    if (!formData.mobile.trim()) {
      toast.error('Please enter your mobile number');
      return false;
    }
    
    if (formData.mobile.length < 10) {
      toast.error('Please enter a valid 10-digit mobile number');
      return false;
    }
    
    if (!formData.address.trim()) {
      toast.error('Please enter your delivery address');
      return false;
    }
    
    if (!formData.pincode.trim()) {
      toast.error('Please enter your pincode');
      return false;
    }
    
    if (formData.pincode.length !== 6) {
      toast.error('Please enter a valid 6-digit pincode');
      return false;
    }

    if (!formData.size) {
      toast.error('Please select a size');
      return false;
    }

    if (formData.quantity < 1) {
      toast.error('Please select a valid quantity');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!product) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const orderId = await saveOrder({
        productId: product.id,
        productName: product.name,
        productDescription: product.description,
        productPrice: product.sellingPrice,
        productImage: product.images[0],
        customerName: formData.fullName,
        customerPhone: formData.mobile,
        customerEmail: formData.email || undefined,
        deliveryAddress: formData.address,
        pincode: formData.pincode,
        size: formData.size,
        quantity: formData.quantity
      });

      // Send order confirmation email
      await sendOrderEmail({
        orderId,
        productName: product.name,
        productPrice: product.sellingPrice,
        quantity: formData.quantity,
        size: formData.size,
        customerName: formData.fullName,
        customerPhone: formData.mobile,
        customerEmail: formData.email,
        deliveryAddress: formData.address,
        pincode: formData.pincode
      });

      // Reset form and close modal
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        address: '',
        pincode: '',
        size: '',
        quantity: 1
      });
      onClose();

      // Show success modal
      onOrderSuccess({
        orderId,
        productName: product.name,
        productPrice: product.sellingPrice * formData.quantity,
        customerName: formData.fullName
      });

    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = formData.quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setFormData({ ...formData, quantity: newQuantity });
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Product Info with Bigger Images */}
        <div className="p-6 border-b bg-gray-50">
          <div className="space-y-4">
            {/* Image Carousel */}
            <div className="relative">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-white scale-125'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Product Details */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 mb-2 text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">
                ₹{product.sellingPrice.toLocaleString()}
              </p>
              <p className="text-sm text-green-600 font-medium">Cash on Delivery</p>
            </div>

            {/* Size and Quantity Selection */}
            <div className="grid grid-cols-2 gap-4">
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size *
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                >
                  <option value="">Select Size</option>
                  {shoeSizes.map((size) => (
                    <option key={size} value={size}>
                      Size {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity *
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-gray-600 hover:text-black transition-colors"
                    disabled={formData.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 bg-gray-50 font-medium">
                    {formData.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-gray-600 hover:text-black transition-colors"
                    disabled={formData.quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter 10-digit mobile number"
              maxLength={10}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Delivery Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter complete address with landmark"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pincode *
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              maxLength={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter 6-digit pincode"
              required
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Order Summary</h4>
            <div className="space-y-1 text-sm text-green-700">
              <p>• Size: {formData.size || 'Not selected'}</p>
              <p>• Quantity: {formData.quantity}</p>
              <p>• Total: ₹{(product.sellingPrice * formData.quantity).toLocaleString()}</p>
              <p>• Delivery: 7 days</p>
              <p>• Payment: Cash on Delivery</p>
              <p>• Email & WhatsApp notifications included</p>
              <p>• Free shipping across India</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
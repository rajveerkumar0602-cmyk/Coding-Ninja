import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BookClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookClassModal: React.FC<BookClassModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🎉 Free Class Booked Successfully! Our team will contact you soon.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
          <X size={28} />
        </button>

        <h2 className="text-3xl font-bold text-center mb-2">Book Your Free Class</h2>
        <p className="text-center text-gray-600 mb-8">Experience live coding session with expert instructor</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-2xl focus:border-orange-500 outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border rounded-2xl focus:border-orange-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-2xl focus:border-orange-500 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-2xl transition text-lg"
          >
            Confirm Free Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookClassModal;

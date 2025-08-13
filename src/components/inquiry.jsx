import React, { useState } from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const Notification = ({ type, title, message, onClose }) => {
    const icons = {
      success: CheckCircle,
      error: XCircle,
      warning: AlertCircle,
    };

    const colors = {
      success: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
      error: "bg-gradient-to-br from-red-50 to-rose-50 border-red-200",
      warning: "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200",
    };

    const iconColors = {
      success: "text-green-500",
      error: "text-red-500",
      warning: "text-amber-500",
    };

    const buttonColors = {
      success: "bg-green-500 hover:bg-green-600",
      error: "bg-red-500 hover:bg-red-600",
      warning: "bg-amber-500 hover:bg-amber-600",
    };

    const Icon = icons[type];

    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in">
          <div className="fixed inset-0 flex items-start justify-center p-4 mt-20">
            <div className={`${colors[type]} border-2 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-500 animate-modal-in backdrop-blur-sm`}>
              <div className="text-center pt-8 pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4">
                  <Icon className={`${iconColors[type]} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              </div>
              <div className="px-8 pb-6">
                <p className="text-gray-600 text-center leading-relaxed">{message}</p>
              </div>
              <div className="px-8 pb-8 flex gap-3">
                <button
                  onClick={onClose}
                  className={`${buttonColors[type]} text-white px-6 py-3 rounded-xl font-semibold flex-1 transition-all duration-200 hover:scale-105 shadow-lg`}
                >
                  {type === 'success' ? 'Great!' : type === 'error' ? 'Try Again' : 'Got it'}
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const showNotification = (type, title, message, duration = 5000) => {
    setNotification({ type, title, message });
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  const validatePhoneNumber = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10;
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    const limitedPhone = phoneNumber.slice(0, 10);
    if (limitedPhone.length >= 6) {
      return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3, 6)}-${limitedPhone.slice(6)}`;
    } else if (limitedPhone.length >= 3) {
      return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3)}`;
    } else if (limitedPhone.length > 0) {
      return `(${limitedPhone}`;
    }
    return limitedPhone;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({ ...formData, [name]: formattedPhone });
      if (formErrors[name] && validatePhoneNumber(formattedPhone)) {
        setFormErrors({ ...formErrors, [name]: "" });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      if (formErrors[name] && value.trim()) {
        setFormErrors({ ...formErrors, [name]: "" });
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhoneNumber(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      showNotification("warning", "Form Incomplete", "Please fill in all required fields correctly.");
      return;
    }

    try {
      showNotification("warning", "Processing...", "Submitting your inquiry, please wait.", 3000);
      const cleanPhone = formData.phone.replace(/\D/g, '');
      const submissionData = { ...formData, phone: cleanPhone };

      const response = await fetch("https://archpoint.onrender.com/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData)
      });

      if (!response.ok) throw new Error("Failed to send inquiry.");

      showNotification("success", "Inquiry Submitted!", "Thank you for your inquiry! We will contact you soon.");
      setFormData({ name: "", email: "", phone: "", projectDetails: "" });
      setFormErrors({});
    } catch (error) {
      console.error("Error:", error);
      showNotification("error", "Submission Failed", "Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl text-gray-600">
              Let's bring your vision to reality with our expert consultation
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                    formErrors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1 animate-shake">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                    formErrors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1 animate-shake">{formErrors.email}</p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                  formErrors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                placeholder="Enter your phone number (10 digits)"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm mt-1 animate-shake">{formErrors.phone}</p>
              )}
              {!formErrors.phone && formData.phone && validatePhoneNumber(formData.phone) && (
                <p className="text-green-600 text-sm mt-1">✓ Valid phone number format</p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                placeholder="Tell us about your dream project..."
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 rounded-lg text-lg transition-all duration-300 active:transform active:scale-95 shadow-lg hover:shadow-xl"
            >
              Submit Inquiry - Let's Make Your Dream Reality
            </button>
          </div>
        </div>
      </section>

      {/* Notification Popup */}
      {notification && (
        <Notification
          type={notification.type}
          title={notification.title}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.8) translateY(-20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-modal-in { animation: modal-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </>
  );
};

export default ContactSection;
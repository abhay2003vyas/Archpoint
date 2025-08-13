import React, { useState } from "react";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [notification, setNotification] = useState(null);

  // Modern Center Modal Notification
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
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in">
          {/* Centered Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className={`${colors[type]} border-2 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-500 animate-modal-in backdrop-blur-sm`}>
              {/* Header with Icon */}
              <div className="text-center pt-8 pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4`}>
                  <Icon className={`${iconColors[type]} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              </div>
              
              {/* Message */}
              <div className="px-8 pb-6">
                <p className="text-gray-600 text-center leading-relaxed">{message}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="px-8 pb-8 flex gap-3">
                <button
                  onClick={onClose}
                  className={`${buttonColors[type]} text-white px-6 py-3 rounded-xl font-semibold flex-1 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  {type === 'success' ? 'Great!' : type === 'error' ? 'Try Again' : 'Got it'}
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-3 rounded-xl font-medium transform transition-all duration-200 hover:scale-105"
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
    
    // Auto-hide after specified duration (increased for center modal)
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  // Phone number validation function
  const validatePhoneNumber = (phone) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if it's exactly 10 digits
    if (cleanPhone.length !== 10) {
      return false;
    }
    
    // Check if it starts with a valid digit (not 0 or 1 for US numbers)
    // This is optional - you can remove this check if needed
    if (cleanPhone[0] === '0' || cleanPhone[0] === '1') {
      return false;
    }
    
    return true;
  };

  // Format phone number for display
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedPhone = phoneNumber.slice(0, 10);
    
    // Format as (XXX) XXX-XXXX
    if (limitedPhone.length >= 6) {
      return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3, 6)}-${limitedPhone.slice(6)}`;
    } else if (limitedPhone.length >= 3) {
      return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3)}`;
    } else if (limitedPhone.length > 0) {
      return `(${limitedPhone}`;
    }
    
    return limitedPhone;
  };

  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    // Phone validation
    if (!formData.contact.trim()) {
      errors.contact = "Contact number is required";
    } else if (!validatePhoneNumber(formData.contact)) {
      errors.contact = "Please enter a valid 10-digit phone number";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    return errors;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, contact: formattedPhone });
    
    // Clear phone error when user starts typing a valid number
    if (formErrors.contact && validatePhoneNumber(formattedPhone)) {
      setFormErrors({ ...formErrors, contact: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        // Show loading notification
        showNotification("warning", "Processing...", "Submitting your form, please wait.", 3000);

        // Extract clean phone number for API submission
        const cleanPhone = formData.contact.replace(/\D/g, '');
        const submissionData = {
          ...formData,
          contact: cleanPhone
        };

        const res = await fetch("http://localhost:5000/api/contacts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        });

        const data = await res.json();

        if (res.ok) {
          showNotification(
            "success",
            "Success!",
            "Your form has been submitted successfully. We'll get back to you soon!"
          );
          setFormData({ name: "", contact: "", email: "" });
          setFormErrors({});
        } else {
          showNotification(
            "error",
            "Submission Failed",
            data.message || "Something went wrong. Please try again."
          );
        }
      } catch (error) {
        showNotification(
          "error",
          "Connection Error",
          "Unable to submit form. Please check your internet connection and try again."
        );
      }
    } else {
      showNotification(
        "warning",
        "Form Incomplete",
        "Please fill in all required fields correctly."
      );
    }
  };

  return (
    <>
      <div id="contact" className="bg-white rounded-2xl shadow-xl p-8 relative">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h3>
        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                // Clear name error when user starts typing
                if (formErrors.name && e.target.value.trim()) {
                  setFormErrors({ ...formErrors, name: "" });
                }
              }}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                formErrors.name ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1 animate-shake">{formErrors.name}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Contact Number (10 digits)"
              value={formData.contact}
              onChange={handlePhoneChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                formErrors.contact ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {formErrors.contact && (
              <p className="text-red-500 text-sm mt-1 animate-shake">{formErrors.contact}</p>
            )}
            {/* Helper text for phone format */}
            {!formErrors.contact && formData.contact && (
              <p className="text-green-600 text-sm mt-1">✓ Valid phone number format</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                // Clear email error when user starts typing a valid email
                if (formErrors.email && /\S+@\S+\.\S+/.test(e.target.value)) {
                  setFormErrors({ ...formErrors, email: "" });
                }
              }}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${
                formErrors.email ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1 animate-shake">{formErrors.email}</p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 active:transform active:scale-95 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Notification Popup */}
      {notification && (
        <Notification
          type={notification.type}
          title={notification.title}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-modal-in {
          animation: modal-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
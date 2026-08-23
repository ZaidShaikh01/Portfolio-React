import { useState, type FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); 

    if (!validate()) return;

    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xljrnnje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setSuccessMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* Upper section */}
      <div className="hidden lg:block h-11 w-full border-b border-b-stroke" />

      {/* Center Section */}
      <div className="flex-1 w-full flex flex-col justify-center items-center p-5">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-gray-400">
              _name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Please enter your name..."
              className="w-full px-4 py-3 bg-backdrop rounded-xl outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-gray-400">
              _email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Please enter your email..."
              className="w-full px-4 py-3 bg-backdrop rounded-xl outline-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-gray-400">
              _message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Please enter your message..."
              rows={5}
              className="w-full px-4 py-3 bg-backdrop rounded-xl outline-none resize-none focus:ring-1 focus:ring-indigo-500"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-48 py-3 text-sm bg-stroke rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'submit-message'}
          </button>

          {/* Success / Error Message */}
          {successMessage && (
            <p
              className={`text-sm ${
                successMessage.includes('successfully')
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
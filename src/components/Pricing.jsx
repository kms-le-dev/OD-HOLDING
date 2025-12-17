import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    success: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_69u7nih',
      'template_fbmljnj',
      {
        prenom: formData.prenom,
        email: formData.email,
        message: formData.message,
      }
    )
    .then(() => {
      setStatus({
        success: true,
        message: 'Message envoyé avec succès !'
      });
      setFormData({ prenom: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus({
        success: false,
        message: 'Une erreur est survenue. Veuillez réessayer.'
      });
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="mt-20 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Nous contacter
      </h2>
      <div className="bg-white p-8 rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium mb-2">
              Nom / Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-neutral-100 border border-neutral-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            ></textarea>
          </div>

          {status.message && (
            <div className={`p-4 rounded-lg ${status.success ? 'bg-blue-900' : 'bg-red-900'}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-6 text-center text-black bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

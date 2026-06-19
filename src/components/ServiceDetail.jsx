import { useState } from "react";
import { X } from "lucide-react";

const ServiceDetail = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  const phoneNumber = "2250757109835";
  const message = encodeURIComponent(
    `Bonjour, je suis intéressé par votre service: ${service.title}. Pouvez-vous m'en dire plus ?`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-drawer-in">
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-200 bg-white">
            <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {service.img && (
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Description
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Caractéristiques
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-slate-700">Développement professionnel et sur-mesure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-slate-700">Optimisé pour la performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-slate-700">Support et maintenance inclus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-slate-700">Design responsive et moderne</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">💡 Conseil:</span> Contactez-nous
                pour discuter de votre projet et obtenir une proposition
                personnalisée.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 flex gap-3 p-6 border-t border-slate-200 bg-white">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 font-medium hover:bg-slate-50 transition-colors"
            >
              Fermer
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-colors text-center"
            >
              💬 Contacter via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

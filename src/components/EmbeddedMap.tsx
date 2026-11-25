import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function EmbeddedMap() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.8188815826998!2d84.74903467530922!3d26.75015526705792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39934700701121dd%3A0x1902b2688ba6d924!2sBangra!5e0!3m2!1sen!2sin!4v1795545903655!5m2!1sen!2sin";

  return (
    <div
      id="dpf-map-container"
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/90 overflow-hidden"
    >
      {/* Contact Reference Cards */}
      <div
        id="map-address-sidebar"
        className="lg:col-span-1 space-y-6 flex flex-col justify-between"
      >
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3">
            <MapPin size={12} className="text-emerald-700" />
            <span>Registered Location</span>
          </div>

          <h3 className="font-display font-black text-xl text-stone-900 tracking-tight mb-2">
            Dev Prabha Foundation
          </h3>
          <p className="text-stone-500 text-xs sm:text-sm mb-6 leading-relaxed">
            Visit our registered headquarters and hospital construction site in Sugauli, East Champaran, Bihar.
          </p>

          <div className="space-y-4 text-xs font-semibold">
            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-amber-50 text-[#b45309] rounded-xl shrink-0 border border-amber-100">
                <MapPin size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-400 font-extrabold">
                  Registered Address
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-stone-800 leading-snug">
                  Bangra, Sugauli, East Champaran, Bihar - 845456, India
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0 border border-emerald-100">
                <Clock size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-400 font-extrabold">
                  Office Hours
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-stone-800">
                  Monday – Saturday: 09:30 AM – 06:00 PM (IST)
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-[#1b4332]/10 text-[#1b4332] rounded-xl shrink-0 border border-[#1b4332]/15">
                <Phone size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-400 font-extrabold">
                  Helpline & Support
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-stone-800 block">
                  +91 9480259311
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0 border border-emerald-100">
                <Mail size={18} />
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-stone-400 font-extrabold">
                  Official Inquiries
                </span>
                <div className="space-y-0.5">
                  <a
                    href="mailto:info@dpf.org.in"
                    className="block text-xs sm:text-[13px] font-semibold text-stone-800 hover:text-emerald-700 font-mono transition-colors"
                  >
                    info@dpf.org.in
                  </a>
                  <a
                    href="mailto:kbt@dpf.org.in"
                    className="block text-[11px] text-stone-600 hover:text-emerald-700 font-mono transition-colors"
                  >
                    kbt@dpf.org.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-2">
          <a
            id="btn-external-gmaps"
            href="https://www.google.com/maps?q=Bangra,+Sugauli,+East+Champaran,+Bihar"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-[#1b4332] hover:bg-[#143527] text-white text-xs font-bold py-3 px-4 rounded-2xl transition-all shadow-soft active:scale-95 flex items-center justify-center space-x-2"
          >
            <MapPin size={14} className="text-amber-400" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>

      {/* Embedded Maps Element */}
      <div
        id="map-iframe-container"
        className="lg:col-span-2 h-[340px] sm:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden shadow-inner border border-stone-200 relative group"
      >
        <iframe
          id="embedded-gmaps-iframe"
          title="Dev Prabha Foundation Google Map"
          src={mapEmbedUrl}
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-sm text-[10px] text-white px-3 py-1.5 rounded-lg font-medium tracking-wider pointer-events-none flex items-center space-x-1.5 shadow-md">
          <MapPin size={12} className="text-rose-400" />
          <span>Bangra, Sugauli, East Champaran, Bihar</span>
        </div>
      </div>
    </div>
  );
}

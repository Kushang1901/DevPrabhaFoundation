import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function EmbeddedMap() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.64797825368!2d82.90870634139829!3d25.32168128522676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76c1ac8dd%3A0x7475d40cb56ebda3!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703200000000!5m2!1sen!2sin";

  return (
    <div id="dpf-map-container" className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 overflow-hidden">
      {/* Contact Reference Cards */}
      <div id="map-address-sidebar" className="lg:col-span-1 space-y-6 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight mb-2">
            DPF Headquarters
          </h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            Visit our central office to register in person, inspect our financial records, audit materials distribution logs, or join of hand.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-[#b45309]/10 text-[#b45309] rounded-xl">
                <MapPin size={18} />
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Address
                </span>
                <span className="text-sm font-semibold text-stone-800 leading-snug">
                  C-27/273, Dev Prabha House, Kabir Colony, Varanasi, Uttar Pradesh, PIN-221002, India
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-[#166534]/10 text-[#166534] rounded-xl">
                <Clock size={18} />
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Office Hours
                </span>
                <span className="text-sm font-semibold text-stone-800">
                  Monday – Saturday: 09:30 AM – 06:00 PM (IST)
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-[#1b4332]/10 text-[#1b4332] rounded-xl">
                <Phone size={18} />
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Direct Contact
                </span>
                <span className="text-sm font-semibold text-stone-800 block">
                  +91-8882-079-079
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-700 rounded-xl">
                <Mail size={18} />
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Inquiries
                </span>
                <span className="text-sm font-semibold text-stone-800 font-mono">
                  info@devprabhafoundation.org
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-2">
          <a
            id="btn-external-gmaps"
            href="https://maps.google.com/?q=Cabir+Colony,+Varanasi"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-[#1b4332] hover:bg-[#143527] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all shadow-soft active:scale-95"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* Embedded Maps Element */}
      <div id="map-iframe-container" className="lg:col-span-2 h-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-inner border border-slate-100 relative group">
        <iframe
          id="embedded-gmaps-iframe"
          title="Dev Prabha Foundation Google Map"
          src={mapEmbedUrl}
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-sm text-[10px] text-white px-2.5 py-1 rounded-md font-medium tracking-wider pointer-events-none flex items-center space-x-1">
          <MapPin size={11} className="text-rose-400" />
          <span>Varanasi, UP, IN</span>
        </div>
      </div>
    </div>
  );
}

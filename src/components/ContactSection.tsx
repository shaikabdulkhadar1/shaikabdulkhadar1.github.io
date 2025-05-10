import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SectionTitle from "./SectionTitle";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const fairfaxLocation: [number, number] = [38.8618, -77.231];

  return (
    <section className="h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="sticky top-0 bg-gray-900 pb-6 z-10">
        <SectionTitle>Contact</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gray-800 p-3 rounded-lg text-amber-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg">shaikabdulkhadar1.shaik@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gray-800 p-3 rounded-lg text-amber-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg">+1 (571) 561-4356</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gray-800 p-3 rounded-lg text-amber-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-lg">Fairfax, Virginia, USA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-800 rounded-2xl overflow-hidden h-[500px] relative z-0 shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <MapContainer
            center={fairfaxLocation}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            className="rounded-2xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={fairfaxLocation}>
              <Popup>
                Shaik Abdul Khadar <br /> Software Developer
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

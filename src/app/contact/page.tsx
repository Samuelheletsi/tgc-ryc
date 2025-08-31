'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ContactData } from '@/types';
import siteData from '@/../public/data/site.json';

// Dynamically import Map to disable SSR
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Contact() {
  const [showQR, setShowQR] = useState(false);
  const contact: ContactData = siteData.contact;

  return (
    <section className="p-6 flex flex-col md:flex-row gap-6">
      {/* Contact Info */}
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-gold">Contact Us</h2>
        <p>Address: {contact.address}</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>

        <button
          onClick={() => setShowQR(!showQR)}
          className="bg-gold text-navy px-4 py-2 rounded shadow-lg hover:scale-105 transition"
        >
          {showQR ? 'Hide QR' : 'Show QR'}
        </button>

        {showQR && (
          <div className="mt-4">
            <QRCodeCanvas value={contact.website} size={128} />
          </div>
        )}
      </div>

      {/* Map */}
      <div className="flex-1 h-96">
        <Map />
      </div>
    </section>
  );
}
import { QRCodeCanvas } from 'qrcode.react';
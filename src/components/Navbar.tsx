'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import useNotifications from '@/hooks/useNotification';
import { SiteData } from '@/types';

export default function Navbar() {
  const { unreadCount } = useNotifications();
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetch('/data/site.json')
      .then(res => res.json())
      .then(data => setSiteData(data))
      .catch(err => console.error('Failed to load site data', err));
  }, []);

  const logoText = siteData?.home?.welcome || 'CE-RYC, The Glorious Church';
  const logoImage = siteData?.home?.logo;

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {logoImage && (
            <img
              src={logoImage}
              alt="Royalties Youth Church Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          )}
          <span className="text-lg md:text-2xl font-bold text-gold">{logoText}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <Link href="/programs" className="hover:text-gold transition">Programs</Link>
          <Link href="/events" className="hover:text-gold transition">Events</Link>
          <Link href="/outreach" className="hover:text-gold transition">Outreach</Link>
          <Link href="/testimonies" className="hover:text-gold transition">Testimonies</Link>
          <Link href="/#about" className="hover:text-gold transition">About Us</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>

          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <Bell size={22} className="hover:text-gold transition" />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-navy rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {unreadCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <span className="block w-6 h-0.5 bg-gold mb-1"></span>
            <span className="block w-6 h-0.5 bg-gold mb-1"></span>
            <span className="block w-6 h-0.5 bg-gold"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy p-4 flex flex-col space-y-4 border-t border-gold">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/programs" onClick={() => setMenuOpen(false)}>Programs</Link>
          <Link href="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link href="/outreach" onClick={() => setMenuOpen(false)}>Outreach</Link>
          <Link href="/testimonies" onClick={() => setMenuOpen(false)}>Testimonies</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

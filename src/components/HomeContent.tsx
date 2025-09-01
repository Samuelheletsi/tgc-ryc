'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Card from '@/components/Card';
import EventSlider from '@/components/EventSlider';
import Gallery from '@/components/Gallery';
import PrayerSection from '@/components/PrayerSection';
import BibleVerseSection from '@/components/BibleVerseSection';
import AboutSection from '@/components/AboutSection';
import GroupsTeaser from '@/components/GroupsTeaser';
import { Card as CardType, Notification, SiteData } from '@/types';

export default function HomeContent() {
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetch('/data/site.json')
      .then(res => res.json())
      .then((data: SiteData) => setSiteData(data))
      .catch(err => console.error('Failed to load site data', err));
  }, []);

  if (!siteData) {
    return <p className="text-white text-center mt-12">Loading...</p>;
  }

  const { home, notifications, gallery } = siteData;
  const latestNotifications: Notification[] = notifications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={home.backgroundVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 overflow-y-auto">
          {home.logo && (
            <img
              src={home.logo}
              alt="Royalties Youth Church Logo"
              className="w-32 h-32 mb-4 mx-auto"
            />
          )}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-6 max-w-4xl"
          >
            {home.welcome}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-2"
          >
            {home.cards.map((card: CardType) => (
              <div key={card.title} className="w-full">
                <Card card={card} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Slider */}
      {/* <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-10 overflow-hidden">
        <EventSlider events={home.cards} />
      </section> */}

      {/* Gallery */}
      <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-10 overflow-hidden">
        <Gallery images={gallery} />
      </section>

      {/* Prayer Section */}
      <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-10">
        <PrayerSection />
      </section>

      {/* Bible Verses Section */}
      <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-10">
        <BibleVerseSection />
      </section>

      {/* About Section */}
      <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-10">
        <AboutSection />
      </section>

      {/* Groups Teaser */}
      <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-10">
        <GroupsTeaser />
      </section>

      {/* Notifications */}
      <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6 text-center md:text-left">
          Latest Announcements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNotifications.map((n: Notification) => (
            <motion.div
              key={n.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 border border-gold rounded-2xl bg-light-navy hover:scale-105 transition cursor-pointer shadow-md"
            >
              <h3 className="text-gold font-bold text-lg">{n.title}</h3>
              <p className="text-white/80 mt-2">{n.description}</p>
              <span className="text-sm text-white/50 block mt-2">
                {new Date(n.date).toLocaleDateString()}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/notifications"
            className="inline-block bg-gold text-navy px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
          >
            View All Notifications
          </Link>
        </div>
      </section>
    </div>
  );
}

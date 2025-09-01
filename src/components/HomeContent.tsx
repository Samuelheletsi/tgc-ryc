'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import EventSlider from '@/components/EventSlider';
import Gallery from '@/components/Gallery';
import PrayerSection from '@/components/PrayerSection';
import BibleVerseSection from '@/components/BibleVerseSection';
import AboutSection from '@/components/AboutSection';
import GroupsTeaser from '@/components/GroupsTeaser';
import { Card as CardType, Notification, SiteData } from '@/types';
import Link from 'next/link';

export default function HomeContent() {
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    fetch('/data/site.json')
      .then(res => res.json())
      .then((data: SiteData) => setSiteData(data))
      .catch(err => console.error('Failed to load site data', err));
  }, []);

  if (!siteData) return <p className="text-white text-center mt-12">Loading...</p>;

  const { home, notifications } = siteData;
  const latestNotifications: Notification[] = notifications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <video
          className="absolute w-full h-full object-cover"
          src={home.backgroundVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 py-32 md:py-40 z-10">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-gold mb-6 max-w-4xl"
          >
            {home.welcome}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto w-full"
          >
            {home.cards.map((card: CardType) => (
              <Card key={card.title} card={card} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <EventSlider events={home.cards} />
      </section>

      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <Gallery images={home.cards} />
      </section>

      <PrayerSection />
      <BibleVerseSection />
      <AboutSection />
      <GroupsTeaser />

      {/* Notifications */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <h2 className="text-3xl font-bold text-gold mb-6">Latest Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestNotifications.map((n: Notification) => (
            <motion.div
              key={n.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 border border-gold rounded-lg bg-navy hover:scale-105 transition cursor-pointer"
            >
              <h3 className="text-gold font-bold text-lg">{n.title}</h3>
              <p className="text-white/80">{n.description}</p>
              <span className="text-sm text-white/50">
                {new Date(n.date).toLocaleDateString()}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/notifications"
            className="inline-block bg-gold text-navy px-6 py-2 rounded shadow-lg hover:scale-105 transition"
          >
            View All Notifications
          </Link>
        </div>
      </section>
    </div>
  );
}

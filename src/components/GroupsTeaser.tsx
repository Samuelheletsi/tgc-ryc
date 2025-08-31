'use client';
import siteData from '@/../public/data/site.json';

export default function GroupsTeaser() {
  const text = siteData.groupsTeaser || '';

  if (!text) return null;

  return (
    <section className="p-6 bg-navy text-white text-center text-xl italic">
      {text}
    </section>
  );
}

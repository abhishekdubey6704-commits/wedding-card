// Edit this file to personalize the invitation. Keep dates in ISO format.
export const wedding = {
  groom: { name: 'Groom Name', role: 'The Groom', description: 'A short introduction about the groom can go here.', image: 'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?auto=format&fit=crop&w=900&q=85' },
  bride: { name: 'Bride Name', role: 'The Bride', description: 'A short introduction about the bride can go here.', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85' },
  date: '2027-01-25T18:00:00+05:30', // Local wedding date/time with timezone
  dateLabel: '25 January 2027',
  venue: 'Your Wedding Venue',
  address: 'Your venue address, City, India',
  mapUrl: 'https://maps.google.com/?q=Your+Wedding+Venue',
  calendarTitle: 'Wedding Celebration',
  calendarDescription: 'Join us as we celebrate our wedding.',
  calendarLocation: 'Your Wedding Venue',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
  youtubeVideoId: 'x9l2VRJ5-3k', // Playback starts only after the guest presses Play.
  preWeddingVideoId: '', // Add the pre-wedding YouTube URL or 11-character video ID.
  healthProtocol: 'If you are feeling unwell, please rest at home. Kindly follow any venue-specific guidance shared by the hosts.',
  events: [
    { name: 'Haldi', date: '24 January 2027', time: '11:00 AM', venue: 'Venue details to be added', note: 'A morning of sunshine, turmeric and blessings.' },
    { name: 'Mehendi', date: '24 January 2027', time: '5:00 PM', venue: 'Venue details to be added', note: 'An evening of colour, music and celebration.' },
    { name: 'Wedding Ceremony', date: '25 January 2027', time: '7:00 PM', venue: 'Venue details to be added', note: 'Join us for the sacred wedding rituals.' },
    { name: 'Reception', date: '25 January 2027', time: '8:30 PM', venue: 'Venue details to be added', note: 'Dinner, photographs and joyful moments.' }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1507504031003-b417219a0ff3?auto=format&fit=crop&w=1200&q=85',
    'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85'
  ]
};

// Personalize the wedding invitation here. Dates are ISO strings with timezone offsets.
export const wedding = {
  groom: { name: 'Abhishek', role: 'The Groom', description: 'With the blessings of our families, we begin a new chapter together.', image: 'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?auto=format&fit=crop&w=900&q=85' },
  bride: { name: 'Shivi', role: 'The Bride', description: 'With the blessings of our families, we begin a new chapter together.', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85' },
  date: '2027-01-25T18:00:00+05:30', dateLabel: '25 January 2027',
  venue: 'Ashoknagar', address: 'Ashoknagar, Madhya Pradesh, India',
  mapUrl: 'https://maps.google.com/?q=Ashoknagar+Madhya+Pradesh',
  calendarTitle: 'Abhishek & Shivi — Wedding Celebration', calendarDescription: 'Join us to celebrate the wedding of Abhishek and Shivi.', calendarLocation: 'Ashoknagar, Madhya Pradesh, India',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '', youtubeVideoId: 'x9l2VRJ5-3k', preWeddingVideoId: '',
  healthProtocol: 'If you are feeling unwell, please rest at home. Kindly follow any venue-specific guidance shared by the hosts.',
  events: [
    { name: 'Haldi', date: '25 January 2027', time: 'Time to be announced', venue: 'Ashoknagar', note: 'A joyful celebration of sunshine, turmeric and blessings.' },
    { name: 'Mehndi', date: '25 January 2027', time: 'Time to be announced', venue: 'Ashoknagar', note: 'An evening of colour, music and celebration.' },
    { name: 'Sangeet', date: '25 January 2027', time: 'Time to be announced', venue: 'Ashoknagar', note: 'Music, dance and memories with family and friends.' },
    { name: 'Wedding Phere', date: '26 January 2027', time: 'Time to be announced', venue: 'Ashoknagar', note: 'Join us for the sacred wedding rituals.' },
    { name: 'Reception', date: '26 January 2027', time: 'Time to be announced', venue: 'Ashoknagar', note: 'Dinner, photographs and joyful moments.' }
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
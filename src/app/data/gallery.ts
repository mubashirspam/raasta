import { MediaItem, OrbitItem } from "../types";




export const GALLERY_ITEMS: MediaItem[] = [
   { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=500&auto=format&fit=crop', caption: 'Handover Day! 🔑', likes: '2.4k' },
  { id: 2, type: 'video', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop', caption: 'Penthouse Tour', likes: '15k' },
  { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop', caption: 'Marina Views', likes: '1.2k' },
  { id: 4, type: 'video', url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=500&auto=format&fit=crop', caption: 'Client Testimonial', likes: '8.5k' },
  { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=500&auto=format&fit=crop', caption: 'Luxury Villa Sold', likes: '4.1k' },
  { id: 6, type: 'video', url: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWl8ZW58MHx8MHx8fDA%3D', caption: 'Dubai Life', likes: '22k' },
  { id: 7, type: 'image', url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=500&auto=format&fit=crop', caption: 'Interior Goals', likes: '3.3k' },
  { id: 8, type: 'image', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=500&auto=format&fit=crop', caption: 'Emaar Beachfront', likes: '2.9k' },
  { id: 9, type: 'video', url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=500&auto=format&fit=crop', caption: 'Investment Tips', likes: '10k' },
  { id: 10, type: 'image', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=500&auto=format&fit=crop', caption: 'New Listing', likes: '1.8k' },
];

//
const getColumnData = (offset: number): MediaItem[] => {
  return [...GALLERY_ITEMS.slice(offset), ...GALLERY_ITEMS.slice(0, offset)];
};


export const GALLERY_COLUMNS: MediaItem[][] = [
  getColumnData(0),  
  getColumnData(3),  
  getColumnData(6),  
  getColumnData(1),  
  getColumnData(8),  
  getColumnData(4),  
  getColumnData(7),  
];


export const ORBIT_ITEMS: OrbitItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=150&q=80' },
  { id: 4, url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=150&q=80' },
  { id: 5, url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=150&q=80' },
  // { id: 6, url: 'https://images.unsplash.com/photo-1512453979798-5ea90b2009f4?auto=format&fit=crop&w=150&q=80' },
  { id: 7, url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=150&q=80' },
  { id: 8, url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=150&q=80' },
  { id: 9, url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=150&q=80' },
  { id: 10, url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=150&q=80' },
  { id: 11, url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&q=80' },
  { id: 12, url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80' },
];

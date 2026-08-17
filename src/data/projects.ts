export type Project = {
  name: string
  industry: string
  location?: string
  image: string
}

export const projects: Project[] = [
  {
    name: 'Hyderabad Outer Ring Road',
    industry: 'Infrastructure',
    location: 'Hyderabad',
    image:
      'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Nandi Road Projects — Bengaluru',
    industry: 'Infrastructure',
    location: 'Bengaluru',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Chennai Underground Metro',
    industry: 'Metro systems',
    location: 'Chennai',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Dwarka Expressway',
    industry: 'Infrastructure',
    location: 'Delhi NCR',
    image:
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f5?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Reliance Metro',
    industry: 'Metro systems',
    image:
      'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Delhi Metro Signalling System',
    industry: 'Metro systems',
    location: 'Delhi',
    image:
      'https://images.unsplash.com/photo-1544620341-11cb2cd57a8f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Bamni & Aapt Wet Work Project',
    industry: 'Infrastructure',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Subansiri Hydro Power — Hydro Power Plant',
    industry: 'Power',
    location: 'Subansiri',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
  },
]

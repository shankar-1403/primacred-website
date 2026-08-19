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
    image: '/images/projects/hyderabad-orr.webp',
  },
  {
    name: 'Nandi Road Projects — Bengaluru',
    industry: 'Infrastructure',
    location: 'Bengaluru',
    image: '/images/projects/nandi.webp',
  },
  {
    name: 'Chennai Underground Metro',
    industry: 'Metro systems',
    location: 'Chennai',
    image: '/images/projects/chennai-metro.webp',
  },
  {
    name: 'Dwarka Expressway',
    industry: 'Infrastructure',
    location: 'Delhi NCR',
    image: '/images/projects/dwarka.webp',
  },
  {
    name: 'Reliance Metro',
    industry: 'Metro systems',
    image: '/images/projects/reliance-metro.webp',
  },
  {
    name: 'Delhi Metro Signalling System',
    industry: 'Metro systems',
    location: 'Delhi',
    image: '/images/projects/delhi-signalling.webp',
  },
  {
    name: 'Bamni & Aapt Wet Work Project',
    industry: 'Infrastructure',
    image: '/images/projects/wet-work.webp',
  },
  {
    name: 'Subansiri Hydro Power — Hydro Power Plant',
    industry: 'Power',
    location: 'Subansiri',
    image: '/images/projects/subansiri.webp',
  },
]

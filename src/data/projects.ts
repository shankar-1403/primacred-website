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
    image: '/images/projects/hyderabad-orr.png',
  },
  {
    name: 'Nandi Road Projects — Bengaluru',
    industry: 'Infrastructure',
    location: 'Bengaluru',
    image: '/images/projects/nandi.png',
  },
  {
    name: 'Chennai Underground Metro',
    industry: 'Metro systems',
    location: 'Chennai',
    image: '/images/projects/chennai-metro.png',
  },
  {
    name: 'Dwarka Expressway',
    industry: 'Infrastructure',
    location: 'Delhi NCR',
    image: '/images/projects/dwarka.png',
  },
  {
    name: 'Reliance Metro',
    industry: 'Metro systems',
    image: '/images/projects/reliance-metro.png',
  },
  {
    name: 'Delhi Metro Signalling System',
    industry: 'Metro systems',
    location: 'Delhi',
    image: '/images/projects/delhi-signalling.png',
  },
  {
    name: 'Bamni & Aapt Wet Work Project',
    industry: 'Infrastructure',
    image: '/images/projects/wet-work.png',
  },
  {
    name: 'Subansiri Hydro Power — Hydro Power Plant',
    industry: 'Power',
    location: 'Subansiri',
    image: '/images/projects/subansiri.png',
  },
]

import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

export const links = [
  { id: 1, link: '#', title: 'Home' },
  { id: 2, link: '#about', title: 'About' },
  { id: 3, link: '#portfolio', title: 'Portfolio' },
  { id: 4, link: '#contact', title: 'Contact' },
]

export const socials = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/siyu-xiao/',
    icon: <AiFillLinkedin />,
  },
  {
    id: 2,
    link: 'https://github.com/SiyuXiao8?tab=repositories',
    icon: <AiFillGithub />,
  },
  {
    id: 3,
    link: 'https://twitter.com/Jacksonxiao13',
    icon: <AiOutlineTwitter />,
  },
]

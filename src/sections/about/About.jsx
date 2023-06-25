import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {BsDownload} from 'react-icons/bs'
import data from './data'
import Card from '../../compoents/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos='fade-up-left'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About me" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>Graduate Student at Northeastern blah blah blah blahs dhasod hjasodh asod haso dh, Check out my resume below to have a better understanding of my experience</p>
          <a href={CV} download className='btn primary'>Download CV<BsDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About
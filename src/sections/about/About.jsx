import AboutImage from '../../assets/about.jpeg'
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
                  <a className='about__link' href={item.link}><small>@ {item.desc}</small></a>
                </Card>
              ))
            }
          </div>
          <p>I'm a passionate Master of Science student at Northeastern University, majoring in Computer Science. Have a background in Finance from my bachelor's degree. I bring a unique perspective to software development. I excel in problem-solving and have a strong attention to detail. I'm committed to continuous learning and collaboration, eager to make meaningful contributions through innovative software solutions. Check out my resume below to have a better understanding of my experience</p>
          <a href={CV} download className='btn primary'>Download CV<BsDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About
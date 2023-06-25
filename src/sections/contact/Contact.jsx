import './contact.css'
import contacts from './data'

const Contact = () => {
  return (
    <section id="contact" >
      <h2>Get In Touch</h2>
      <p>Shoot me an Email</p>
      <div className="container contact__container" data-aos='zoom-in'>
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>
            {contact.icon}
          </a>)
        }
      </div>
      </section>
  )
}

export default Contact
import React, { useEffect } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Seo from '../components/SEO/Seo'
import './Contact.css'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="contactPage">
            <Seo
                title="Contact Us"
                description="Get in touch with us. Find our store locations, opening hours, or send us a message."
            />
            <div className="container">
                <h1 className="pageTitle">Get in Touch</h1>
                <p className="pageSubtitle">We'd love to hear from you. Here's how you can reach us.</p>

                <div className="contactGrid">
                    <div className="contactInfo">
                        <div className="infoCard">
                            <MapPin className="infoIcon" size={32} />
                            <h3>Visit Us</h3>
                            <p>123 Fresh Market Lane,<br />Green Valley, CA 90210</p>
                        </div>
                        <div className="infoCard">
                            <Phone className="infoIcon" size={32} />
                            <h3>Call Us</h3>
                            <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                        </div>
                        <div className="infoCard">
                            <Mail className="infoIcon" size={32} />
                            <h3>Email Us</h3>
                            <p>hello@bostan.com<br />support@bostan.com</p>
                        </div>
                        <div className="infoCard">
                            <Clock className="infoIcon" size={32} />
                            <h3>Open Hours</h3>
                            <p>Mon - Sat: 8am - 8pm<br />Sunday: 9am - 6pm</p>
                        </div>
                    </div>

                    <div className="contactFormWrapper">
                        <h2>Send us a Message</h2>
                        <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
                            <div className="formGroup">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="formGroup">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="formGroup">
                                <label>Subject</label>
                                <input type="text" placeholder="How can we help?" required />
                            </div>
                            <div className="formGroup">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Write your message here..." required></textarea>
                            </div>
                            <button type="submit" className="submitBtn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

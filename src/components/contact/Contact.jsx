import './Contact.css'

function Contact() {
    return (
        <div id="contact">
            <span>Contact</span>
            <div className="contact-content">
                <h2>Let's work together</h2>
                <p>Have progect in mind or just want to say hi? My inbox is open.</p>
                <form className="action">
                    <input type="text" className="name" aria-label="name"
                    placeholder="Your name" required />
                    <input type="email" className="email" aria-label="email" placeholder="name@company.com" required />
                    <textarea name="textarea" className="textarea" aria-label="textarea" placeholder="Tell me about your project" required></textarea>
                    <button className="btn">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
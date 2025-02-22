export const Contact = () => {
    const handleFormData = (formData)=>{
          const formInputData = Object.fromEntries(formData.fromEntries());
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container"> 

            <form action="{handleFormData}">
                <input type="text" className="form-control" required autoComplete="off" placeholder="Enter Your Name " name="username" />
                <input type="email" className="form-control" required autoComplete="off" placeholder="Enter Your Mail " name="email" />

                <textarea name="message" className="form-control" rows="10" placeholder="Enter Your Message" required autoComplete="off"></textarea>
                <button className="btn" type="submit">Send </button>
            </form>

            </div>
        </section>
    )
}
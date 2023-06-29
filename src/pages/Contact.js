import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./css/Contact.css"

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_smjr94g',
            'template_61ltsjg',
            form.current,
            'ecKGnDzJmOWd10XVC'
        ).then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    return (
        <div className={"div_contact_us"}>
            <section className={"section_contact_us"}>
                <div className={"container"}>
                    <h2>Contact me</h2>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={"--form-control--card"}
                    >
                    <input
                        type={"text"}
                        placeholder={"Full Name"}
                        name={"user_name"}
                    />
                    <input
                        type={"email"}
                        placeholder={"Email"}
                        name={"user_email"}
                    />
                    <input
                        type={"text"}
                        placeholder={"Subject"}
                    />
                    <textarea
                        name={"message"}
                        cols={"30"}
                        rows={"10"}
                    ></textarea>
                    <button className={"--btn"}>
                        Send Message
                    </button>

                    </form>
                </div>

            </section>


        </div>
    );
};

export default Contact;
import React from "react";
import * as emailjs from "emailjs-com";
export default function emailSender() {

    
    var service_id = "gmail";
    var user_id = "user_ZmoMD0bX2Mur2iy9v8hOD";

    var template_params = {
        "name": "",
        "email": "",
        "message": ""
    }

    
    var template_id = "test";
    emailjs.send(service_id, template_id, template_params,user_id);

    return (
        <div>
            <form className="contact-form" /*onSubmit={sendEmail}*/>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="name_value"   />
                <label>Email</label>
                <input type="email" name="email_value" />
                <label>Message</label>
                <textarea name="message_value" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}   
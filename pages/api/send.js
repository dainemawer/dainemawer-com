/**
 * ✉️ SendGrid API
 *
 * Processing form Content via SendGrid from Contact
 *
 * @link https://app.sendgrid.com/guide
 * @file SendGrid Lambda
 * @author Daine Mawer
 * @since 1.0.0
 */

const sgMail = require('@sendgrid/mail');

const EMAIL = 'hello@dainemawer.com';
const TEMPLATE_ID = 'd-914f508fedc04332b3ce4804c4a99453';

export default async (req, res) => {
    let recaptcha;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const {name, email, subject, message, token} = req.body;
    const endpoint = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`;

    const content = {
        dynamic_template_data: {
            email,
            message,
            name,
            subject
        },
        from: EMAIL,
        subject: `${subject} | dainemawer.com`,
        templateId: TEMPLATE_ID,
        text: message,
        to: EMAIL
    };

    await fetch(endpoint, {
        method: 'post',
        mode: 'no-cors',
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                recaptcha = true;
            } else {
                recaptcha = false;
            }
        })
        .catch(err => {
            recaptcha = false
            console.log(err);
        });

    if(recaptcha) {
        try {
            await sgMail.send(content);
            res.status(200).send('Message sent successfully.');
        } catch (error) {
            console.log('ERROR', error.response.body);
            res.status(400).send('Message not sent.');
        }
    }
}
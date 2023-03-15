const transporter = require('../connections/nodemailer')
const handleTemplates = require('../utils/handleTemplates')

const guide = (req, res) => {
    return res.json({ message: "Feel free to test my Sending E-mail Api!", guide: "POST request to this endpoint, with 'name' and 'email' on body as JSON" })
}

const presentation = async (req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.json({ message: 'name and email are required' })
    }

    const html = await handleTemplates('./src/templates/presentation.html', { name })

    transporter.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${name} <${email}>`,
        subject: 'Presentation',
        html
    })

    return res.json('E-mail sent!')
}

module.exports = {
    guide,
    presentation
}
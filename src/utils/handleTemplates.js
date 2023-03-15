const fs = require('fs/promises')
const handlebars = require('handlebars')

const handleTemplates = async (file, context) => {
    const template = await fs.readFile(file)
    const compiler = handlebars.compile(template.toString())
    return compiler(context)
}

module.exports = handleTemplates
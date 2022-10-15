const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    name:  {
        type: "string"
    },
    status: {
        type: "boolean"
    }
})

module.exports = mongoose.model('Role', RoleSchema)
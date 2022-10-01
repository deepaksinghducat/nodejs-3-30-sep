import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    name:  {
        type: "string"
    }
})

export default mongoose.model('Todos', TodoSchema)
import mongoose from 'mongoose'

const tiktokSchema = mongoose.Schema({
    url : String,
    channel : String,
    description : String,
    song : String,
    likes : String,
    shares : String,
    comments : String

})

export default mongoose.model('tiktokVideos' , tiktokSchema)
import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary
            required:true,
        },

        thumbnail:
        {
            
        }


    },
    {
        timestamps: true,
    }
)

export const Video = mongoose.model("Video", videoSchema);
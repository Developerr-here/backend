import mongoose, {Scheme} from "mongoose";
import mongooseAggregatePaginate from "mongoose=aggregate-paginate-v2"

const videoSchema = new Schema(
    {
      videoFile:{
         tyep:String,
         required:true
      },
      thumbnail:{
        type:String,
        required:true
      },
      title:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      },
      duration:{
        type:Number, //cloudinary url k sath duration time bi bhej deta
        required:true
      },
      views:{
        type:Number,
        default:0
      },
      
      isPublished:{
            type:Boolean,
            default:true
        },
      
      owner:{
        type:Schema.Type.Objecttd,
        ref:"User"
      }

    },

    
    {
        timestamps:true
    })
 
videoSchema.plugin(mongooseAggregatePaginate)
    
export const Video = mongoose.model("Video",videoSchema)
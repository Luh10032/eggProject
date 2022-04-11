import {getModelForClass, prop,pre} from "@typegoose/typegoose"
@pre<Device>('save',function(next){
    if(!this.createdAt || this.isNew){
        this.createdAt=this.updatedAt=new Date();
    }else{
        this.updatedAt=new Date();
    }
    next()
})

class Device {
    @prop()
    CameraId?:string;

}
export const DeviceModel=getModelForClass(Device);
export const DeviceObj={
    name:"Device",
    model:DeviceModel
}

// interface Device{
//     CreatedAt?:Date;
//     DeviceId?:number;
// }

// export default app=>{
//     const mongoose=app.mongoose;
//     const Schema=mongoose.Schema;
//     const PostSchema=new Schema({
//         created:{
//             type:Date,
//             default:new Date(),
//         },
//         CameraId:{
//             type:String,
//             default:"",
//         }
//     })
//     return mongoose.model('Device',PostSchema);
// }

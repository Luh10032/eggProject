import { Controller } from "egg";


export default class NsqWriterController extends Controller {
    async write(){
        const {ctx}=this;
       // console.log(ctx.request.body);
        const {message}=ctx.request.body;
        const result=ctx.app.writerNsq.publish(ctx.app.config.nsq.topic,message,(error)=>{
            console.log("error:",error);
        })
        console.log("result:",result);
        ctx.body=message
    }
}

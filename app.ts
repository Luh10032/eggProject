//import { Application } from "egg";
import {Writer,Reader} from "nsqjs"
import  Redis from  "ioredis"
export default (app)=>{
    app.beforeStart(async()=>{
        //nsq生产者
     //   const ctx=app.createAnonymousContext();
        const writerNsq=new Writer(app.config.nsq.nsqHostWrite,app.config.nsq.writePort);
        writerNsq.connect();
        writerNsq.on('ready',()=>{
            app.writerNsq=writerNsq;
        })
        console.log("nsq writer connect success")
        
        //nsq消费者
        const client=new Reader(app.config.nsq.topic,app.config.nsq.channel,{
            lookupdHTTPAddresses:app.config.nsq.nsqHostReader,
           // maxInFlight:1
        })
        client.connect();
        client.on('message',async msg=>{
            //console.log("get message",msg)
            let data:Buffer =<Buffer>msg.body;
            console.log("get data :",data.toString())
            // try{
            //     const touch=()=>{
            //         if(!msg.hasResponded){
            //             msg.touch()
            //         }
            //     }
            // }
            msg.finish();
        })
        
        //连接Redis
       const redis=new Redis(6379, '127.0.0.1');
       app.redis=redis;
       redis.ping((value)=>{console.log("redis: ",value)})

    })
}
declare module 'egg'{
    export interface Application{
        writerNsq:Writer
        redis
    }
}
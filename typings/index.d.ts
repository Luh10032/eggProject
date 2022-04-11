import 'egg';
import 'nsqjs'
declare module 'egg' {
    // export interface Application{
    //     nsqWriter:Writer;
    // }
}

declare module 'nsqjs'{
    export interface Writer{
        connect();
        publish(topic,msgs,callback:Function);

    }
}
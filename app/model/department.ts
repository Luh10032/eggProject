import { Schema, Model, Document } from 'mongoose'
import { Application } from 'egg'

const schema = new Schema(
    {
        name: { type: String },
    },
    {
        timestamps: true
    }
)
export interface Department extends Document {
    name: string;
}
export default (app: Application) => {
    return app.mongoose.model<Department>('Department', schema);
}

declare module 'egg' {
    export interface IModel {
        Department: Model<Department>
    }
}
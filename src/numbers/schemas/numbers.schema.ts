import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";

export type NumberDocument = Number & Document;
@Schema()
export class Number {
    @Prop()
    number: number;

    @Prop({ type: Date })
    date: Date;

}

export const NumberSchema = SchemaFactory.createForClass(Number);
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Expense extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, type: Number })
  amount: number;

  @Prop({ required: true, type: Date })
  date: Date;

  @Prop()
  catagory?: string;

  @Prop({ required: true })
  userId: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);

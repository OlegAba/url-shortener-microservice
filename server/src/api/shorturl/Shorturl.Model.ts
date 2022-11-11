import { Schema } from "mongoose";
import mongoose = require('mongoose');
import { BaseModel } from '../Base.Model';

const ShorturlSchema: Schema = new Schema({
  date_created: { type: Number },
  url: { type: String },
  index: { type: Number }
});

export class ShorturlModel extends BaseModel {

  constructor() {
    super(mongoose.model('Shorturl', ShorturlSchema));
  }
}
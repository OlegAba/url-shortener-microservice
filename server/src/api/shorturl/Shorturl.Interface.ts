import mongoose from "mongoose";

interface Shorturl {
  date_created: number;
  url: string;
  index: number;
}

export interface ShorturlJSON extends Shorturl {
  _id: string
}

export interface ShorturlDB extends Shorturl {
  _id: mongoose.ObjectId
}
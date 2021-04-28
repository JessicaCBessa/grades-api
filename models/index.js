import mongoose from 'mongoose';
import gradesModel from './gradesModel.js';
import dotenv from 'dotenv';
dotenv.config();
let db = {};

db.mongoose = gradesModel(mongoose);
db.url = process.env.MONGODB;

export { db };

import mongoose from 'mongoose'

const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
})

export const Result = mongoose.model('result', resultSchema)

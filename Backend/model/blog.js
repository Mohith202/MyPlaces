import mongoose from 'mongoose';
const { Schema, model } = mongoose;

mongoose.connect("mongodb+srv://username:<pass>@mydata.bkwkloc.mongodb.net/?retryWrites=true&w=majority")

const blogSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [{
    user: String,
    content: String,
    votes: Number
  }]
});

const Blog = model('Blog', blogSchema);
export default Blog;

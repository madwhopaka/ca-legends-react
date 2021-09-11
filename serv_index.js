import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

// express configuration
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

var port = process.env.PORT || 6500; 

//connecting to MONGODB database
const db =
  "mongodb+srv://madwho:YcF36R0IwmybGZly@cluster0.nvbew.mongodb.net/UserFormDB?retryWrites=true&w=majority";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((e) => {
    console.log(e);
  });

//
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(_dirname, 'client', 'build' ,'index.html'));
  })
}

// Making the schema for the model
const UserResponseSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  date: { type: Date },
  desc: { type: String },
});

//making the model of that schema in the database i.e registering the model/table and the attributes in the db
const UserResponse = new mongoose.model("UserResponse", UserResponseSchema);

app.post("/submitForm", (req, res) => {
  console.log(req.body);
  if (req.body != null) {
    const { first, last, email, date, text } = req.body;
    const userResponse = new UserResponse({
      first_name: first,
      last_name: last,
      email: email,
      date: date,
      desc: text,
    }).save((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
    res.send({
      first,
      last,
      email,
      date,
      text,
    });
  } else {
    res.send("We got a null response");
  }
});


app.listen(port, console.log(`server started on port ${port}`));
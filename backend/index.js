const express = require("express");
require("./db/config");
const cors = require("cors");
const User = require("./db/User");
const app = express();
const Product=require("./db/Product")
app.use(express.json());
//the above is used for getting the json object being send from the postman/frontend
app.use(cors());
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result=result.toObject()
  delete result.password
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});

app.post("/add-product",async (req,resp)=>{
  let product=new Product(req.body);
  let result=await product.save();
  resp.send(result)
})

app.listen(5000);

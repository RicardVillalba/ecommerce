const expres = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//import routes
const userRoutes = require("./routes/user");
//App
const app = expres();

//db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

//routes middleware
app.use("/api",userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

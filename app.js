import express from "express";
import path from 'path';
import url from "url";
import homeRoutes from "./routes/homeRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import academicRoutes from "./routes/academicRoutes.js";
// import placementRoutes from "./routes/placementRoute.js";
// import otherRoutes from "./routes/otherRoutes.js";

const app = express();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(express.static(path.join(process.cwd(),'public')));


app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/', admissionRoutes)
app.use('/academics', academicRoutes);
// app.use('/placement', placementRoutes);
// app.use('/others', otherRoutes);



app.listen('3000', ()=>{
    console.log("Server Connected Successfully");
});
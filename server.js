import * as dotenv from "dotenv";
import "express-async-errors";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import userRouter from './routes/userRoutes.js';
import videoRouter from './routes/videoRouter.js';
import bodyParser from 'body-parser';
import { v2 as cloudinary } from 'cloudinary';
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import fileUpload from 'express-fileupload';
import cors from 'cors'
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import { ChargilyClient } from '@chargily/chargily-pay';


// import bodyParser from 'body-parser';
const API_SECRET_KEY='test_sk_IVLV1sNgBLYJUfnXyX0OpTOoZDNRLRGqSVE1iUcm'
const client = new ChargilyClient({
  api_key: API_SECRET_KEY,
  mode: 'test', // Change to 'live' when deploying your application
});


async function main(){
  const app=express()
  app.use(
     bodyParser.json({
       verify: (req, _res, buf) => {
         req.rawBody = buf;
       },
     })
   );
   app.post('/chargily/webhook', (req, res) => {
     const signature = req.get('signature') || '';
     const payload = req .rawBody;

     if (!signature) {
       console.log('Signature header is missing');
       res.sendStatus(400);
       return;
     }

     try {
       if (!verifySignature(payload, signature, API_SECRET_KEY)) {
         console.log('Signature is invalid');
         res.sendStatus(403);
         return;
       }
     } catch (error) {
       console.log(
         'Something happened while trying to process the request to the webhook'
       );
       res.sendStatus(403);
       return;
     }

     const event = req.body;
     // You can use the event.type here to implement your own logic
     console.log(event);

    ;
   });
}
main()


dotenv.config();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors())
app.use(express.static(path.resolve(__dirname, "./public")));
// USE V2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
app.use(express.json());
const fileUploadMiddleware = fileUpload({ useTempFiles: true });
app.use(cookieParser(process.env.JWT_SECRET));




// app.post('/api/v1/checkout',async(req,res)=>{
//   try {
//     //  const checkout= await client.createCheckout({
//     //       success_url:'https://google.com',
//     //       amount:req.body.amount,
//     //       currency:'dzd'
//     //   })
//     //   if(checkout){
//     //       console.log('my checkout',checkout)
//     //   }
//     const amount=req.body.amount
//       res.status(200).json({amount})
//   } catch (error) {
//       console.error(error)
//   }
// }
// )
app.post('/api/v1/checkout', async (req, res) => {
  try {
      const amount = req.body.amount;
      const checkout = await client.createCheckout({
          success_url: 'https://google.com',
          amount: amount,
          currency: 'dzd'
      });
      if (checkout) {
          console.log('my checkout', checkout);
      }
      res.status(200).json({ checkout});
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/courses",fileUploadMiddleware, courseRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", videoRouter)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

const express = require("express");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");
const {
  globalErrorHandler,
  routeNotFoudHandler,
} = require("./src/middlewares/error");
const nudge = require("./src/routes/route");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);
app.use(cors({ origin: "https://nudge-frontend.onrender.com" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is helathy and running.." });
});

app.use("/api", nudge);

app.use(globalErrorHandler);
app.use(routeNotFoudHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

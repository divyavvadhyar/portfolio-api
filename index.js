import { serve, setup } from "swagger-ui-express";
import { readFileSync } from "fs";
import { parse } from "yaml";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// Hashnode API
var spec = readFileSync("./apis/hashnode.yaml", "utf8");
var swaggerDocument = parse(spec);

app.use("/", serve, setup(swaggerDocument));
app.listen(port, () => console.log(`Listening on port ${port}!`));

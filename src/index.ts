import dotenv from "dotenv";

dotenv.config();

import { google } from "googleapis";
import express, { Request, Response } from "express";
const fs = require("fs");

const credenciais = require("../google-drive/credenciais.json");

const app = express();

const authClient = new google.auth.GoogleAuth({
  credentials: credenciais,
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({
  version: "v3",
  auth: authClient,
});

async function main() {
  const res = await drive.files.create({
    requestBody: {
      name: "testimage.jpg",
      mimeType: "image/jpg",
    },
    media: {
      mimeType: "image/jpg",
      body: fs.createReadStream("teste.jpg"),
    },
  });

  console.log(res.data);
}

main();

app.listen(8000, () => {});

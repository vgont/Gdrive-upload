const fs = require("fs");
const fileType = require("file-type");

const detectMimeType = (filePath) => {
  const buffer = fs.readFileSync(filePath);
  const fileTypeResult = fileType(buffer);
};

export default detectMimeType;

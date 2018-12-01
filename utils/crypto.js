const crypto = require("crypto");
const secret = "QWSWTYHBNM:L:<Z";
const algo = "aes-256-ctr";

function encodeId(str) {
  return crypto.createCipher(algo, secret).update(String(str), "utf-8", "hex");
}

function decodeId(str) {
  return crypto
    .createDecipher(algo, secret)
    .update(String(str), "hex", "utf-8");
}

module.exports = { encodeId, decodeId };

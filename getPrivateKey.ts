import bs58 from "bs58";
import fs from "fs";

const secret = JSON.parse(fs.readFileSync("keypair.json", "utf-8"));
const privateKeyBase58 = bs58.encode(Uint8Array.from(secret).slice(0, 32));

console.log("Base58 Private Key:", privateKeyBase58);

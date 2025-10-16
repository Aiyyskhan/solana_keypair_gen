import { Keypair } from "@solana/web3.js";
import fs from "fs";

const secret = JSON.parse(fs.readFileSync("keypair_1.json", "utf-8"));
const keypair = Keypair.fromSecretKey(Uint8Array.from(secret));

console.log("Public Key:", keypair.publicKey.toBase58());
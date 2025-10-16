import { Keypair } from "@solana/web3.js";
import fs from "fs";

/**
 * Генерирует новую пару ключей Solana и сохраняет ее в следующий доступный файл keypair_N.json.
 */
function generateAndSaveKeypair() {
  try {
    // Создаём новую пару ключей
    const keypair = Keypair.generate();

    // Конвертируем приватный ключ в массив чисел (формат, совместимый с Solana CLI)
    const secretArray = Array.from(keypair.secretKey);

    // Находим следующее доступное имя файла (keypair_0.json, keypair_1.json, и т.д.)
    let i = 0;
    let filePath = `keypair_${i}.json`;
    while (fs.existsSync(filePath)) {
      i++;
      filePath = `keypair_${i}.json`;
    }

    // Сохраняем пару ключей в новый файл
    fs.writeFileSync(filePath, JSON.stringify(secretArray));

    console.log(`✅ Новая пара ключей сохранена в файл ${filePath}`);
    console.log("   Публичный ключ:", keypair.publicKey.toBase58());
  } catch (error) {
    console.error("❌ Ошибка при генерации и сохранении ключей:", error);
  }
}

generateAndSaveKeypair();
import fs from 'fs';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import dotenv from 'dotenv';

// JSON 데이터 생성
dotenv.config();

async function makeJson() {
  const doc = new GoogleSpreadsheet(process.env.SHEET_ID, {
    apiKey: process.env.VITE_GOOGLE_API_KEY,
  });

  await doc.loadInfo();
  const sheets = doc.sheetCount;

  for (let i = 0; i < sheets; i++) {
    const sheet = doc.sheetsByIndex[i];
    const rows = await sheet.getRows();
    await sheet.loadCells();
    const jsonData = {};

    for (let j = 1; j < rows.length; j++) {
      jsonData[sheet.getCell(j, 0).value] = sheet.getCell(j, 1).value;
    }

    // JSON 데이터를 문자열로 변환
    const jsonString = JSON.stringify(jsonData, null, 2);
    // JSON 파일 생성
    fs.writeFileSync(`./src/locales/en/${sheet.title}.json`, jsonString);
  }
}
makeJson();

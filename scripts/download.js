import fs from 'fs';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import dotenv from 'dotenv';

dotenv.config();

(async function makeJson() {
  const doc = new GoogleSpreadsheet(process.env.SHEET_ID, {
    apiKey: process.env.VITE_GOOGLE_API_KEY,
  });

  await doc.loadInfo();
  const sheets = doc.sheetCount;

  for (let i = 0; i < sheets; i++) {
    const sheet = doc.sheetsByIndex[i];
    await sheet.loadCells();
    const rows = await sheet.getRows();
    const langs = await sheet._headerValues; // ['ko', 'en', 'it']

    const jsonData = {};

    langs.forEach((language, index) => {
      for (let j = 1; j < rows.length; j++) {
        jsonData[sheet.getCell(j, 0).value] = sheet.getCell(j, index).value;
      }

      const jsonString = JSON.stringify(jsonData, null, 2);

      // JSON 파일 생성
      fs.writeFileSync(
        `./src/locales/${language}/${sheet.title}.json`,
        jsonString,
      );
    });
  }
})();

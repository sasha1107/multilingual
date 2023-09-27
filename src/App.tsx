import { useTranslation } from 'react-i18next';
// import { GoogleSpreadsheet } from 'google-spreadsheet';

function App() {
  const { t, i18n } = useTranslation();

  // const SHEET_ID = '1EkM75wLhvdz_uE-lW3uvQXcy0h80ThCOywYwouZswO0';

  // const doc = new GoogleSpreadsheet(SHEET_ID, {
  //   apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  // });

  // (async function () {
  //   await doc.loadInfo();
  //   console.log(doc, 'doc');
  //   const sheets = doc.sheetCount;
  //   const jsonData: any = {};

  //   for (let i = 0; i < sheets; i++) {
  //     const sheet = doc.sheetsByIndex[i];
  //     const rows = await sheet.getRows();
  //     await sheet.loadCells();
  //     for (let j = 0; j < rows.length; j++) {
  //       jsonData[sheet.getCell(j, 0).value as any] = sheet.getCell(j, 1).value;
  //     }
  //   }
  //   console.log(jsonData, 'jsonData');
  // })();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div>{t('언어')}</div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value=''>{t('언어')}</option>
        <option value='ko'>한국어</option>
        <option value='en'>English</option>
        <option value='it'>Italiano</option>
      </select>

      <h1>Vite + React</h1>
      <h2>{t('운행중')}</h2>
      <h2>{t('주차중')}</h2>
      <h2>{t('전체 업체')}</h2>
    </div>
  );
}

export default App;

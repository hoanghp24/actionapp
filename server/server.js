const express = require('express');
const app = express();
const port = 3000;

const initialState = {
  product: '',
  productName: '',
  productDesc: '',
  bomNo: '',
  batchCode: '',
  mainWONO: '',
  curWO: '',
  curOprCode: '',
  curMC: '',
  curOprSts: '',
  blocked: '',
  blockReason: '',
  damaged: '',
  damageNote: '',
  curOprSeq: 0,
  eqNo: '',
  qcType: '',
  lstQCSpec: [],
};

// Một số dữ liệu giả lập để trả về
const batchCodeData = {
  '154AB2401001066_AB24010024090000130': {
    product: '154AB2401001066',
    productName: 'Sample Product',
    productDesc: 'Sample Description',
    bomNo: 'BOM12345',
    batchCode: 'AB24010024090000130',
    mainWONO: 'WON12345',
    curWO: 'WO12345',
    curOprCode: 'OPR123',
    curMC: 'MC123',
    curOprSts: 'In Progress',
    blocked: 'No',
    blockReason: '',
    damaged: 'No',
    damageNote: '',
    curOprSeq: 1,
    eqNo: 'EQ123',
    qcType: 'QC123',
    lstQCSpec: [],
  },
};

// Endpoint để lấy dữ liệu batch code
app.get('/api/MES/GetBatchCode', (req, res) => {
  const { Product, BatchCode } = req.query;
  const key = `${Product}_${BatchCode}`;
  const data = batchCodeData[key] || initialState;

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

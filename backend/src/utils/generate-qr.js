import QRCode from 'qrcode';
import express from 'express';

const app = express();

// Generate QR code as image
app.get('/api/generate-qr', async (req, res) => {
  const url = req.query.url || 'http://localhost:5173/workshop/register?workshop=robotics';
  
  try {
    // Generate QR as PNG
    const qrImage = await QRCode.toBuffer(url, {
      type: 'png',
      margin: 2,
      width: 500,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    
    res.setHeader('Content-Type', 'image/png');
    res.send(qrImage);
  } catch (err) {
    res.status(500).send('Error generating QR');
  }
});

// Generate QR as Data URL (for embedding in HTML)
app.get('/api/generate-qr-dataurl', async (req, res) => {
  const url = req.query.url || 'http://localhost:5173/workshop/register?workshop=robotics';
  
  try {
    const qrDataUrl = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 300
    });
    
    res.json({ qrCode: qrDataUrl });
  } catch (err) {
    res.status(500).json({ error: 'QR generation failed' });
  }
});

app.listen(3000, () => {
  console.log('QR generator running on port 3000');
});
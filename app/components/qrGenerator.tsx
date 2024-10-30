"use client"
import { useState } from 'react';
import QRCode from 'qrcode';

const QrCodeGenerator: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleGenerate = async () => {
    try {
      const generatedUrl = await QRCode.toDataURL(url);
      setQrCodeUrl(generatedUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Generador de QR Code</h1>
      <input
        type="text"
        placeholder="Ingresa la URL aquí"
        value={url}
        onChange={handleChange}
        className="border p-2 mb-4 rounded w-80 text-black"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generar QR Code
      </button>
      {qrCodeUrl && (
        <div className="mt-4">
          <img src={qrCodeUrl} alt="Generated QR Code" />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;

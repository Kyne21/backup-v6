import React, { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Pastikan file ini sudah benar

const App = () => {
  // Data JSON yang akan diunggah
  const data = [
    {
      "thn": 2010,
      "Pendapatan Pajak Penghasilan": 49.9,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 32.2,
      "Pendapatan Pajak Bumi dan Bangunan": 4.0,
      "Pendapatan Pajak lainnya": 0.6,
      "Pendapatan Cukai": 9.3,
      "Bea Masuk": 2.8,
      "Bea Keluar": 1.2
    },
    {
      "thn": 2011,
      "Pendapatan Pajak Penghasilan": 49.3,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 31.8,
      "Pendapatan Pajak Bumi dan Bangunan": 3.4,
      "Pendapatan Pajak lainnya": 0.4,
      "Pendapatan Cukai": 8.8,
      "Bea Masuk": 2.9,
      "Bea Keluar": 3.3
    },
    {
      "thn": 2012,
      "Pendapatan Pajak Penghasilan": 47.4,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 34.4,
      "Pendapatan Pajak Bumi dan Bangunan": 3.0,
      "Pendapatan Pajak lainnya": 0.4,
      "Pendapatan Cukai": 9.7,
      "Bea Masuk": 2.9,
      "Bea Keluar": 2.2
    },
    {
      "thn": 2013,
      "Pendapatan Pajak Penghasilan": 47.0,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 35.7,
      "Pendapatan Pajak Bumi dan Bangunan": 2.37,
      "Pendapatan Pajak lainnya": 0.5,
      "Pendapatan Cukai": 10.1,
      "Bea Masuk": 2.9,
      "Bea Keluar": 1.5
    },
    {
      "thn": 2014,
      "Pendapatan Pajak Penghasilan": 47.6,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 35.7,
      "Pendapatan Pajak Bumi dan Bangunan": 2.0,
      "Pendapatan Pajak lainnya": 0.5,
      "Pendapatan Cukai": 10.3,
      "Bea Masuk": 2.8,
      "Bea Keluar": 1.0
    },
    {
      "thn": 2015,
      "Pendapatan Pajak Penghasilan": 48.6,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 34.2,
      "Pendapatan Pajak Bumi dan Bangunan": 2.4,
      "Pendapatan Pajak lainnya": 0.4,
      "Pendapatan Cukai": 11.7,
      "Bea Masuk": 2.5,
      "Bea Keluar": 0.3
    },
    {
      "thn": 2016,
      "Pendapatan Pajak Penghasilan": 51.1,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 32.1,
      "Pendapatan Pajak Bumi dan Bangunan": 1.5,
      "Pendapatan Pajak lainnya": 1.3,
      "Pendapatan Cukai": 11.2,
      "Bea Masuk": 2.5,
      "Bea Keluar": 0.2
    },
    {
      "thn": 2017,
      "Pendapatan Pajak Penghasilan": 47.5,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 35.8,
      "Pendapatan Pajak Bumi dan Bangunan": 1.2,
      "Pendapatan Pajak lainnya": 1.2,
      "Pendapatan Cukai": 11.4,
      "Bea Masuk": 2.6,
      "Bea Keluar": 0.3
    },
    {
      "thn": 2018,
      "Pendapatan Pajak Penghasilan": 48.7,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 35.4,
      "Pendapatan Pajak Bumi dan Bangunan": 1.3,
      "Pendapatan Pajak lainnya": 1.1,
      "Pendapatan Cukai": 10.5,
      "Bea Masuk": 2.6,
      "Bea Keluar": 0.4
    },
    {
      "thn": 2019,
      "Pendapatan Pajak Penghasilan": 50.0,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 34.4,
      "Pendapatan Pajak Bumi dan Bangunan": 1.4,
      "Pendapatan Pajak lainnya": 0.5,
      "Pendapatan Cukai": 11.1,
      "Bea Masuk": 2.4,
      "Bea Keluar": 0.2
    },
    {
      "thn": 2020,
      "Pendapatan Pajak Penghasilan": 46.2,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 35.0,
      "Pendapatan Pajak Bumi dan Bangunan": 1.6,
      "Pendapatan Pajak lainnya": 0.5,
      "Pendapatan Cukai": 13.7,
      "Bea Masuk": 2.5,
      "Bea Keluar": 0.3
    },
    {
      "thn": 2021,
      "Pendapatan Pajak Penghasilan": 45.0,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 35.7,
      "Pendapatan Pajak Bumi dan Bangunan": 1.2,
      "Pendapatan Pajak lainnya": 0.7,
      "Pendapatan Cukai": 12.6,
      "Bea Masuk": 2.5,
      "Bea Keluar": 2.2
    },
    {
      "thn": 2022,
      "Pendapatan Pajak Penghasilan": 49.1,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 33.8,
      "Pendapatan Pajak Bumi dan Bangunan": 1.1,
      "Pendapatan Pajak lainnya": 0.4,
      "Pendapatan Cukai": 11.2,
      "Bea Masuk": 2.5,
      "Bea Keluar": 2.0
    },
    {
      "thn": 2023,
      "Pendapatan Pajak Penghasilan": 49.3,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 35.4,
      "Pendapatan Pajak Bumi dan Bangunan": 1.5,
      "Pendapatan Pajak lainnya": 0.5,
      "Pendapatan Cukai": 10.3,
      "Bea Masuk": 2.4,
      "Bea Keluar": 0.6
    },
    {
      "thn": 2024,
      "Pendapatan Pajak Penghasilan": 54.4,
      "Pendapatan Pajak Pertambahan Nilai dan PPnBM": 32.5,
      "Pendapatan Pajak Bumi dan Bangunan": 0.2,
      "Pendapatan Pajak lainnya": 0.2,
      "Pendapatan Cukai": 9.3,
      "Bea Masuk": 2.3,
      "Bea Keluar": 0.9
    }
  ]
  
  // Fungsi untuk mengunggah data ke Firestore
  const uploadData = async () => {
    try {
      const collectionRef = "DP"; // Ganti dengan nama koleksi yang diinginkan

      // Iterasi data dan unggah setiap item
      const uploadPromises = data.map(async (item) => {
        const docRef = doc(db, collectionRef, item.thn.toString());
        await setDoc(docRef, item); // Mengunggah data ke dokumen
        console.log(`Data untuk thn ${item.thn} berhasil diunggah.`);
      });

      // Tunggu semua proses selesai
      await Promise.all(uploadPromises);

      console.log("Semua data berhasil diunggah ke Firestore!");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengunggah data:", error);
    }
  };

  // Jalankan fungsi upload saat komponen pertama kali dirender
  useEffect(() => {
    uploadData();
  }, []); // Dependensi kosong memastikan fungsi hanya dipanggil sekali

  return (
    <div>
      Proses upload sedang berjalan, cek console untuk detailnya.
    </div>
  );

}
;

export default App;
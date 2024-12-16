import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import db dari file konfigurasi

const App = () => {

  // Data JSON
  const data = 
  [
    {
        "thn": 2010,
        "pdb": 1709132.0,
        "pre": null
    },
    {
        "thn": 2011,
        "pdb": 1816268.2,
        "pre": null
    },
    {
        "thn": 2012,
        "pdb": 1929018.7,
        "pre": null
    },
    {
        "thn": 2013,
        "pdb": 2036816.6,
        "pre": null
    },
    {
        "thn": 2014,
        "pdb": 2137385.6,
        "pre": null
    },
    {
        "thn": 2015,
        "pdb": 2238704.4,
        "pre": null
    },
    {
        "thn": 2016,
        "pdb": 2355445.0,
        "pre": null
    },
    {
        "thn": 2017,
        "pdb": 2473512.9,
        "pre": null
    },
    {
        "thn": 2018,
        "pdb": 2603852.6,
        "pre": null
    },
    {
        "thn": 2019,
        "pdb": 2735414.1,
        "pre": null
    },
    {
        "thn": 2020,
        "pdb": 2589769.2,
        "pre": null
    },
    {
        "thn": 2021,
        "pdb": 2773065.2,
        "pre": null
    },
    {
        "thn": 2022,
        "pdb": 2924441.4,
        "pre": null
    },
    {
        "thn": 2023,
        "pdb": 3075776.6,
        "pre": null
    },
    {
        "thn": 2024,
        "pdb": 3230967.8,
        "pre": null
    },
    {
        "thn": 2025,
        "pdb": null,
        "pre": 3895764.28
    },
    {
        "thn": 2026,
        "pdb": null,
        "pre": 4032745.39
    },
    {
        "thn": 2027,
        "pdb": null,
        "pre": 4175376.45
    },
    {
        "thn": 2028,
        "pdb": null,
        "pre": 4323956.39
    },
    {
        "thn": 2029,
        "pdb": null,
        "pre": 4478794.27
    }
]


  // Fungsi upload data
  const uploadData = async () => {
    try {
      const collectionRef = "T2";
  
      // Iterasi data menggunakan forEach
      const uploadPromises = data.map(async (item) => {
        const docRef = doc(db, collectionRef, item.thn.toString());
        await setDoc(docRef, item);
        console.log(`Data untuk Tahun ${item.thn} berhasil diunggah.`);
      });
  
      // Tunggu semua proses upload selesai
      await Promise.all(uploadPromises);
  
      console.log("Semua data berhasil diunggah ke Firestore!");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengunggah data:", error);
    }
  };
  

  // Jalankan upload data saat komponen pertama kali dirender
  useEffect(() => {
    uploadData();
  }, []); // Hanya dijalankan sekali saat komponen dirender

  return <div>Proses upload sedang berjalan, cek console untuk detailnya.</div>;
};

export default App;

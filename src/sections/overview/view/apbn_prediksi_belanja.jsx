import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { db } from "../../../firebaseConfig";
import fetchCollectionData from "../../../fetchData";
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';

export default function AppView() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionData = await fetchCollectionData("PREDIKBN"); // Ganti "prediksi" dengan nama koleksi Anda di Firestore
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1, // Buat ID berdasarkan indeks (atau gunakan doc.id jika ada)
          prediksi: doc.prediksi || 0, // Pastikan ada fallback jika nilai tidak tersedia
          tahun: doc.thn || 0, // Menggunakan variabel `tahun`
        }));
  
        // Urutkan data berdasarkan `tahun` secara ascending
        const sortedData = mappedData.sort((a, b) => a.thn - b.thn);
  
        setUsers(sortedData); // Update state dengan data yang sudah diurutkan
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);


  const prediksi = users.map(user => user.prediksi);

  return (
    <Container maxWidth="xl">


      <Grid container spacing={3}>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Prediksi Belanja Negara Setiap Tahun"
            subheader="Asli"
            chart={{
              labels: users.map(user => user.tahun),
              series: [
                {
                  name: 'Asli',
                  type: 'bar',
                  data: prediksi,
                },

              ],
            }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}

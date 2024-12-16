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
        const collectionData = await fetchCollectionData("pdb"); // Ganti "pdb" dengan nama koleksi Anda di Firestore
        
        const mappedData = collectionData.map((doc, index) => ({
          id: index + 1, // Buat ID berdasarkan indeks (atau gunakan doc.id jika ada)
          pdb: doc.pdb || 0, // Pastikan ada fallback jika nilai tidak tersedia
          tahun: doc.tahun || 0, // Menggunakan variabel `tahun`
        }));
  
        // Urutkan data berdasarkan `tahun` secara ascending
        const sortedData = mappedData.sort((a, b) => a.tahun - b.tahun);
  
        setUsers(sortedData); // Update state dengan data yang sudah diurutkan
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);


  const pdb = users.map(user => user.pdb);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Concentration"
            subheader="Daily"
            chart={{
              labels: users.map(user => user.tahun),
              series: [
                {
                  name: 'PM2.5',
                  type: 'line',
                  fill: 'solid',
                  data: pdb,
                }
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Water Level"
            chart={{
              series: [
                { label: 'Water', value: 100 },
                { label: 'Air', value: 20 },
              ],
            }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}

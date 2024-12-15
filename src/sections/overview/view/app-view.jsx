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
        const collectionData = await fetchCollectionData("pdb"); // Ganti "nama_koleksi" dengan nama koleksi Anda
        setData(collectionData);
        console.log("data ini:", collectionData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Simulasi data dummy
    const dummyData = [
      { id: 1, PM25: 31000, CO2: 400, SHTT: 28, SHTH: 65, Cahaya: 1200, V_air_hujan: 10, Hujan: "Tidak", time: "08:00" },
      { id: 2, PM25: 40, CO2: 450, SHTT: 29, SHTH: 63, Cahaya: 1150, V_air_hujan: 8, Hujan: "Tidak", time: "09:00" },
      { id: 3, PM25: 50, CO2: 470, SHTT: 30, SHTH: 60, Cahaya: 1000, V_air_hujan: 12, Hujan: "Ya", time: "10:00" },
      { id: 4, PM25: 55, CO2: 480, SHTT: 31, SHTH: 58, Cahaya: 950, V_air_hujan: 15, Hujan: "Ya", time: "11:00" },
    ];
    setUsers(dummyData);
  }, []);

  

  const pm25 = users.map(user => user.PM25);
  const co2 = users.map(user => user.CO2);
  const temp = users.map(user => user.SHTT);
  const hum = users.map(user => user.SHTH);
  const v = users.map(user => user.V_air_hujan).slice(-1)[0];

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
              labels: users.map(user => user.time),
              series: [
                {
                  name: 'PM2.5',
                  type: 'line',
                  fill: 'solid',
                  data: pm25,
                },
                {
                  name: 'CO2',
                  type: 'line',
                  fill: 'solid',
                  data: co2,
                },
                {
                  name: 'Temperatur',
                  type: 'line',
                  fill: 'solid',
                  data: temp,
                },
                {
                  name: 'Kelembapan',
                  type: 'line',
                  fill: 'solid',
                  data: hum,
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Water Level"
            chart={{
              series: [
                { label: 'Water', value: v },
                { label: 'Air', value: 20 },
              ],
            }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}

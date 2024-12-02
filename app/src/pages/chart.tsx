// src/pages/chart.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, CircularProgress, Paper } from "@mui/material";
import Chart from "../components/Chart";
import DateSelector from "../components/DateSelector";
import { fetchChartData } from "../utils/api";

const ChartPage: React.FC = () => {
  const [data, setData] = useState({
    historico: [],
    projecao: [],
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (startDate: string) => {
    console.log("passou aqui");
    setLoading(true);
    const chartData = await fetchChartData(startDate);
    setData(chartData);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0]; // Formata a data para "YYYY-MM-DD"
      fetchData(formattedDate);
    }
  }, [selectedDate]);

  return (
    <Box sx={{ p: 3, background: "#D3D3D3" }}>
      <Grid container spacing={3}>
        {/* Seção principal do gráfico (60% da largura) */}
        <Grid item xs={12} md={7}>
          {loading ? <CircularProgress /> : <Chart data={data} />}
        </Grid>
        {/* </Paper> */}
        {/* Seção para os containers de dados (40% da largura) */}
        <Grid item xs={12} md={5}>
          <Typography variant="h6" mb={2}>
            Seleção de Data
          </Typography>
          <DateSelector value={selectedDate} onChange={setSelectedDate} />

          <Grid container spacing={2} mt={3}>
            {/* Container 1 */}
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <Typography>Dados 1</Typography>
              </Paper>
            </Grid>
            {/* Container 2 */}
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <Typography>Dados 2</Typography>
              </Paper>
            </Grid>
            {/* Container 3 */}
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                <Typography>Dados 3</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartPage;

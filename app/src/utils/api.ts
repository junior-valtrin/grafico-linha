// src/utils/api.ts

export const fetchChartData = async (startDate: string) => {
  // export const fetchChartData = async () => {
  const historicoEProjecao = {
    historico: [
      {
        data: "2023-11-01",
        valor: 5.25,
        tipo: "1",
        descricao: "Valor do dólar na data",
      },
      {
        data: "2023-11-01",
        valor: 5.75,
        tipo: "2",
        descricao: "Valor do euro na data",
      },
      {
        data: "2023-11-02",
        valor: 5.22,
        tipo: "1",
        descricao: "Valor do dólar na data",
      },
      {
        data: "2023-11-02",
        valor: 5.72,
        tipo: "2",
        descricao: "Valor do euro na data",
      },
      {
        data: "2023-11-03",
        valor: 5.2,
        tipo: "1",
        descricao: "Valor do dólar na data",
      },
      {
        data: "2023-11-03",
        valor: 5.7,
        tipo: "2",
        descricao: "Valor do euro na data",
      },
      {
        data: "2023-11-04",
        valor: 5.18,
        tipo: "1",
        descricao: "Valor do dólar na data",
      },
      {
        data: "2023-11-04",
        valor: 5.68,
        tipo: "2",
        descricao: "Valor do euro na data",
      },
      // Ponto adicional para conectar com a projeção
      {
        data: "2023-11-05",
        valor: 5.0,
        tipo: "1",
        descricao: "Conexão com a projeção",
      },
      {
        data: "2023-11-05",
        valor: 5.5,
        tipo: "2",
        descricao: "Conexão com a projeção",
      },
    ],
    projecao: [
      {
        data: "2023-11-05",
        valor_projetado: 5.0,
        tipo: "1",
        descricao: "Projeção do dólar",
      },
      {
        data: "2023-11-05",
        valor_projetado: 5.5,
        tipo: "2",
        descricao: "Projeção do euro",
      },
      {
        data: "2023-11-06",
        valor_projetado: 4.98,
        tipo: "1",
        descricao: "Projeção do dólar",
      },
      {
        data: "2023-11-06",
        valor_projetado: 5.48,
        tipo: "2",
        descricao: "Projeção do euro",
      },
      {
        data: "2023-11-07",
        valor_projetado: 4.95,
        tipo: "1",
        descricao: "Projeção do dólar",
      },
      {
        data: "2023-11-07",
        valor_projetado: 5.45,
        tipo: "2",
        descricao: "Projeção do euro",
      },
    ],
  };

  return {
    historico: historicoEProjecao.historico,
    projecao: historicoEProjecao.projecao,
  };
};

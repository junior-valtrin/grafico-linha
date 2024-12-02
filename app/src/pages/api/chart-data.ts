// import { NextApiRequest, NextApiResponse } from "next";

// // Dados simulados para o gráfico
// const mockData = {
//   chart: {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Vendas",
//         data: [100, 200, 150, 300, 250, 400],
//         borderColor: "#4caf50",
//         backgroundColor: "rgba(76, 175, 80, 0.1)",
//         tension: 0.4,
//       },
//     ],
//   },
//   details: {
//     totalSales: 1400,
//     averageSales: 233.33,
//   },
// };

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     res.status(200).json(mockData);
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

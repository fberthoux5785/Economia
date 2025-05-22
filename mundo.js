export default function RankingMundo() {
  const empresas = [
    "Apple",
    "Microsoft",
    "Saudi Aramco",
    "Amazon",
    "Alphabet (Google)",
    "Meta (Facebook)",
    "Berkshire Hathaway",
    "Tesla",
    "NVIDIA",
    "Visa"
  ];

  return (
    <div>
      <h1>Top 10 Empresas com mais dinheiro do Mundo</h1>
      <ol>
        {empresas.map((empresa, index) => (
          <li key={index}>{empresa}</li>
        ))}
      </ol>
    </div>
  );
}

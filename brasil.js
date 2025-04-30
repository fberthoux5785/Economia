export default function RankingBrasil() {
  const empresas = [
    "Petrobras",
    "Vale",
    "Itaú Unibanco",
    "Bradesco",
    "Banco do Brasil",
    "Ambev",
    "Magazine Luiza",
    "Santander Brasil",
    "BTG Pactual",
    "WEG"
  ];

  return (
    <div>
      <h1>Top 10 Empresas com mais dinheiro do Brasil</h1>
      <ol>
        {empresas.map((empresa, index) => (
          <li key={index}>{empresa}</li>
        ))}
      </ol>
    </div>
  );
}

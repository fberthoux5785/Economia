import Link from "next/link";

export default function Home({ moedas }) {
  return (
    <div>
      <h1>Site de Investimentos - Economia</h1>
      <h2>Cotações</h2>
      <ul>
        <li>Real Brasileiro (BRL): R$ 1,00 (base)</li>
        <li>Dólar (USD): R$ {moedas.USDBRL.bid}</li>
        <li>Euro (EUR): R$ {moedas.EURBRL.bid}</li>
      </ul>
      <h2>Rankings</h2>
      <ul>
        <li><Link href="/ranking/brasil">Top 10 Empresas do Brasil</Link></li>
        <li><Link href="/ranking/mundo">Top 10 Empresas do Mundo</Link></li>
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");
  const data = await res.json();
  return {
    props: {
      moedas: data,
    },
  };
}

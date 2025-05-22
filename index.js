import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Site de Investimentos - Economia</h1>
      <h2>Cotações</h2>
      <ul>
        <li>Real Brasileiro (BRL): R$ 1,00 (base)</li>
        <li>Dólar (USD): R$ 5,20</li>
        <li>Euro (EUR): R$ 5,60</li>
      </ul>
      <h2>Rankings</h2>
      <ul>
        <li><Link href="/ranking/brasil">Top 10 Empresas do Brasil</Link></li>
        <li><Link href="/ranking/mundo">Top 10 Empresas do Mundo</Link></li>
      </ul>
    </div>
  );
}

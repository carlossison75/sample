export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await fetch('http://localhost:3212/api/', { cache: 'no-store' });

  console.log(await data.json());

  return <div>Page</div>;
}

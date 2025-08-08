export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await fetch(
    'https://sample-qzw5pm2oe-carlossison75s-projects.vercel.app/api/',
    { cache: 'no-store' }
  );

  console.log(await data.json());

  return <div>Page</div>;
}

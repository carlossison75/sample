import PUBLIC_URL from '@/constants';

export const dynamic = 'force-dynamic';

export default async function Page() {
  console.log(PUBLIC_URL);
  const data = await fetch(process.env.API_PATH!, { cache: 'no-store' });

  console.log(await data.json());

  return <div>Page</div>;
}

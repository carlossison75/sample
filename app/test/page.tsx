import PUBLIC_URL from '@/constants';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await fetch(PUBLIC_URL, { cache: 'no-store' });

  console.log(await data.json());

  return <div>Page</div>;
}

import PUBLIC_URL from '@/constants';

export const dynamic = 'force-dynamic';

export default async function Page() {
  console.log(PUBLIC_URL);
  const data = await fetch('https://sample-lemon-six.vercel.app/api/', {
    cache: 'no-store',
  });

  console.log(await data.json());

  return <div>Page</div>;
}

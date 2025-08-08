import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function Page() {
  try {
    const headersList = await headers();
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host');
    const baseUrl = `${protocol}://${host}`;

    console.log(baseUrl);

    const data = await fetch(`${baseUrl}/api`, { cache: 'no-store' });

    console.log(await data.json());
  } catch (error) {
    console.log('JSON ERROR: ', error);
  }

  return <div>Page</div>;
}

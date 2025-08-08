const PUBLIC_URL = process.env.API_PATH;

if (!PUBLIC_URL) {
  throw new Error('NEXT_PUBLIC_API_PATH is not defined');
}

export default PUBLIC_URL;

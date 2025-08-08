'use client';

import React from 'react';

export default function Page() {
  React.useEffect(() => {
    (async () => {
      const data = await fetch('/api', { cache: 'no-store' });

      console.log(await data.json());
    })();
  }, []);

  return <div>Page</div>;
}

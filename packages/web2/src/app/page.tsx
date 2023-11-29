'use client';

import { Button, store } from '@monorepo/common';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <main>
        <div>web2</div>
        <Button />
      </main>
    </Provider>
  );
}

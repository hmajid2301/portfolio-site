import React, { ReactNode } from 'react';

const App = ({ element }: { element: ReactNode }) => (
  <div className="root">{element};</div>
);

export default App;

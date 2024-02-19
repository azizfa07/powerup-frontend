// components/Layout.tsx

import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ 
      backgroundImage: `url('/login/assets/Background.svg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Optional: agar layout mengisi tinggi layar
    }}>
      {children}
    </div>
  );
};

export default Layout;

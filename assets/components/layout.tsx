import { ReactNode } from 'react';
import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <ConnectButton
        chainStatus="icon"
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
      {children}
    </div>
  );
};

export default Layout;

import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Completed = () => {
  return (
    <main className={styles.main}>
        <ConnectButton/>
      <h1 className={styles.title}>Form Submitted Successfully!</h1>
      <p className={styles.description}>Thank you for submitting the form.</p>
      <p className={styles.description}>Complete the last step</p>
      <button className={styles.mintButton}>mint .ba soulboundNFT</button>
    </main>
  );
};

export default Completed;

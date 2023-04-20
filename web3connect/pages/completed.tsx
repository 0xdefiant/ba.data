import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';



const Completed = () => {
  return (
    <main className={styles.main}>
        <ConnectButton/>
      <h1 className={styles.title}>Form Submitted Successfully!</h1>
      <p className={styles.description}>Thank you for submitting the form.</p>
      <p className={styles.description}>Complete the last step</p>
      <button className={styles.mintButton}>mint .ba soulboundNFT</button>
      <a className={styles.card} href='/dashboard'>
            <h2>Go to Dashboard &rarr;</h2>
            <p>See how you Rank</p>
          </a>
    </main>
  );
};

export default Completed;

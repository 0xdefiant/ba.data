import styles from '../styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getAllRecords } from '../lib/airtable';

export async function getServerSideProps() {
    const records = await getAllRecords();
    return { props: { records } };
  }

  export default function Home({ records }) {
    return (
      <div>
        <h1>Airtable records</h1>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{JSON.stringify(record)}</li>
          ))}
        </ul>
      </div>
    );
  }
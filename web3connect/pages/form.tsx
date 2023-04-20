import { useState } from 'react';
import styles from '../styles/form.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Form = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    activity: '',
    occupation: '',
    field5: '',
    field6: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        income: parseFloat(formData.income),
      };
      const response = await axios.post('/api/send-text', dataToSend);
      console.log(response.data.message);
      router.push('/completed');
    } catch (error) {
      console.error('Error posting form data:', error);
    }
  };

  return (
    <main className={styles.main}>
      <ConnectButton />
      <h1 className={styles.title}>
        Bankless Advisor + <a href="">Data Rewards</a>
      </h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        {Object.keys(formData).map((field, index) => (
          <div className={styles.row} key={index}>
            <label htmlFor={field} className={styles.label}>{field}</label>
            {field === 'income' ? (
              <input
                type="number"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={styles.inputField}
              />
            ) : field === 'field5' || field === 'field6' ? (
              <select
                           id={field}
                           name={field}
                           value={formData[field]}
                           onChange={handleChange}
                           className={styles.selectField}
                         >
              <option value="">Select an option</option>
              <option value="Mainnet">Mainnet</option>
              <option value="Polygon">Polygon</option>
              <option value="Arbitrum">Arbitrum</option>
              <option value="Optimism">Optimism</option>
              </select>
              ) : (
              <input
                           type="text"
                           id={field}
                           name={field}
                           value={formData[field]}
                           onChange={handleChange}
                           className={styles.inputField}
                         />
              )}
              </div>
              ))}
              <button className={styles.submitButton} type="submit">
              Submit
              </button>
              </form>
              </main>
              );
              };
              
              export default Form;

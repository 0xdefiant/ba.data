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
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    field10: '',
  });

  const router = useRouter();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/send-text', formData);
      console.log(response.data.message);
      router.push('/completed');
    } catch (error) {
      console.error('Error posting form data:', error);
    }
  };

  return (
    <main className={styles.main}>
            <ConnectButton/>
      <h1 className={styles.title}>
        Bankless Advisor + <a href="">Data Rewards</a>
      </h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        {Object.keys(formData).map((field, index) => (
          <div className={styles.row} key={index}>
            <label htmlFor={field}>{field}</label>
            {(field === "field6" || field === "field7" || field === "field8") ? (
              <select
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
              </select>
            ) : (
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Form;

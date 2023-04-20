// pages/api/send-text.ts or pages/api/send-text.js
import { NextApiRequest, NextApiResponse } from 'next';
import { createRecord } from '../../lib/airtable';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;
      await createRecord(formData);

      res.status(200).json({ message: 'Record created successfully.' });
    } catch (error) {
      console.error('Error creating record:', error);
      res.status(500).json({ message: 'Error creating record.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

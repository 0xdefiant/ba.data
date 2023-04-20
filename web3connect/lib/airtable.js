import Airtable from 'airtable';

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;
const tableName = process.env.AIRTABLE_TABLE_NAME;

Airtable.configure({ apiKey });

const base = Airtable.base(baseId);
const table = base(tableName);

// Fetch all records
export async function getAllRecords() {
    const records = await table.select().all();
    return records.map((record) => record.fields);
  }
  
  // Fetch a specific record by ID
  export async function getRecordById(id) {
    const record = await table.find(id);
    return record.fields;
  }
  
  // Create a new record
  export async function createRecord(fields) {
    const newRecord = await table.create([{ fields }]);
    return newRecord[0].fields;
  }
  
  // Update a record
  export async function updateRecord(id, fields) {
    const updatedRecord = await table.update([{ id, fields }]);
    return updatedRecord[0].fields;
  }
  
  // Delete a record
  export async function deleteRecord(id) {
    await table.destroy([id]);
  }
  

    const minifyItems = (records) =>
    records.map((record) => getMinifiedItem(record));

// to make record meaningful.
    const getMinifiedItem = (record) => {
        if (!record.fields.brought) {
        record.fields.brought = false;
        }
    return {
        id: record.id,
        fields: record.fields,
        };
    };

export { table, minifyItems, getMinifiedItem };

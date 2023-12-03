// utils/parseProjects.js
import Papa from 'papaparse';

// Function to parse CSV data
export const parseCSVData = (csvFile, callback) => {
  Papa.parse(csvFile, {
    download: true,
    header: true, // Assumes the CSV file has a header row
    complete: (results) => {
      callback(results.data);
    },
    error: (error) => {
      console.error('Error parsing CSV data: ', error);
    }
  });
};
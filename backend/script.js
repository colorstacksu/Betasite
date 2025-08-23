const { google } = require('googleapis');
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
require('dotenv').config();

// Load environment variables
const SHEET_ID = process.env.SHEET_ID; // Google Sheet ID
const RANGE = 'Sheet1!B:E'; // Adjust range as needed
const MONGO_URI = process.env.MONGO_URI; // MongoDB connection string
const DATABASE_NAME = 'ColorStackKSU'; // Database name
const COLLECTION_NAME = 'Members'; // Collection name

// Google Sheets authentication
async function getGoogleSheetData() {
    const auth = new google.auth.GoogleAuth({
        keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: RANGE,
    });

    return response.data.values;
}

// MongoDB connection
async function saveToMongoDB(data) {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const collection = db.collection(COLLECTION_NAME);
        const members = await collection.find().toArray();
        console.log(members)

        // initialized new array to store names of current members in the Mongo Database
        names = []
        for (let i = 0; i < members.length; i++){
            names.push(members[i].name)
        }
        // jamal = [1,4,5,7]
        console.log("Names:",names)
        // Prepare data for MongoDB
        const headers = data[0];
        console.log(data[1][0])
        filteredData = []
        
        // only names that are not in the database are added to filteredData and then written to the database
        for (let i = 1; i < data.length; i++){
            if (!names.includes(data[i][0])){
                //names.push(data[i][0]);
                filteredData.push(data[i])
            }
        }
        console.log("Filtered Data:",filteredData)
        headersForDatabase = ['name', 'major', 'year', 'linkedin']
        const rows = filteredData.slice(0).map((row) =>
            Object.fromEntries(headersForDatabase.map((headersForDatabase, index) => [headersForDatabase, row[index] || null]))
        );

        // Insert data into MongoDB
        const result = await collection.insertMany(rows);
        console.log(`${result.insertedCount} records inserted!`);
    } 
    finally {
        await client.close();
    }
}

// Main function
(async () => {
    try {
        console.log('Fetching Google Sheet data...');
        const data = await getGoogleSheetData();
        if (!data || data.length === 0) {
            console.log('No data found in the Google Sheet.');
            return;
        }

        console.log('Saving data to MongoDB...');
        await saveToMongoDB(data);
        console.log('Data transfer completed!');
    } catch (err) {
        console.error('Error:', err);
    }
})();

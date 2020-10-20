const express = require('express');
const app = express ();

const controller = require('./controllers/controller.js');
const saveControl = require('./controllers/saveControl');

app.use(express.json());




// initial data
app.get('/api/sightings/', controller.getSightings);

// users add to data array and update data
app.post('/api/sightings', controller.addSightings);
app.put('/api/sightings/:id', controller.updateSighting);

// users delete data from array 

app.delete('/api/sightings/:id', controller.deleteSighting)


const port = 3001;
app.listen(port, () => console.log(`Server is running on ${port}`));


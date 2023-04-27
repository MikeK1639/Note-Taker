const apiRoutes = require("express").Router();
const path = require('path');
const fs = require('fs');
const uuid = require("../helpers/uuid");


apiRoutes.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});
 
apiRoutes.get('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('../db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((note) => note.id === noteId);
        return result.length > 0
          ? res.json(result)
          : res.json('No note with that ID');
      });
  });

apiRoutes.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    // creating body for note
    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };

    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

});



apiRoutes.delete('/api/notes/:id', (req, res) => {

    let db = JSON.parse(fs.readFileSync('db/db.json'))

    let deleteNotes = db.filter(item => item.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);

})
    ;

    apiRoutes.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        // creating body for note
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid(),
        };
    
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    
    });
module.exports = apiRoutes;



const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
router.get('/movies', function(req, res){
    let movies = ["James-bond", "Dil", "Dhoom", "Sin-city", "Black-Friday"]
    res.send(movies)
})
router.get('/movies/:number', function(req, res){
    let movies = ["James-bond", "Dil", "Dhoom", "Sin-city", "Black-Friday"];
    let index = req.params.number
    if(index >= movies.length || index < 0 ){
        res.send("Invalid input")
    }else{
    res.send(movies[index])
    }
})
router.get('/films', function(req, res){
    let films = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }];
       res.send(films)
       
})
router.get ('/films/:filmId', function(req, res){
    let movieId  = req.params.filmId
    let films =[ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }];
       let flag = false;
        for(let i=0; i<films.length; i++){
            let movieName = films[i]
            if (movieName.id != movieId){
                flag = false
            }else {
                 res.send(films[i])
                 break;
            }
          
        }
        if(flag == false){
            res.send("no such movie exist")
        }
       
       
});


module.exports = router;

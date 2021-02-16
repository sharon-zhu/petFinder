//controllers for the petfinder API queries

const secret = require('../secrets.js');
const petfinder = require("@petfinder/petfinder-js");
const petSearch = new petfinder.Client({apiKey: secret.petApiKey, secret: secret.petApiSecret});

const petController = {};

petController.search = (req,res,next) =>{
  petSearch.animal.search({type: req.params.type, location: req.params.location})
  .then(function (query) {
 // Do something with `response.data.animals`
  res.locals.query = query.data;
  console.log('pet controller hghghg', query.data)
 
  next();
  })
  .catch(err => {
    next({
      log: 'There was an express error on petfinderApiController animal.search',
      message: 'Cannot search new item'
    });
  }); 
} 

    // async function showAnimals(animalType, location) {
    //     let page = 1;
    //     do {
    //       apiResult = await petfinder.animal.search({
    //         type: animalType,
    //         location: location,
    //         page,
    //         limit: 100,
    //       });
    //       let dogIdx = (page - 1) * 100;
    //       apiResult.data.animals.forEach(function(animal) {
    //         console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
    //       });
      
    //       page++;
    //     } while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
    //   }


module.exports = petController;

// client.animal.search({
//     type: "Dog",
//     breed: "Bernedoodle",
//     page: 1,
//     limit: 100,
//   }).then(resp => {
//     // Do something with resp.data.animals
//   });
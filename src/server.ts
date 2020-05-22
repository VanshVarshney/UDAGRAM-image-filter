import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  const image_url = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpeg|jpg|gif|png|svg)/
  
  app.use(bodyParser.json());
  
  app.use(function (request, response, next) {
    if (request.path != '/filteredimage') {
      response.send("try GET /filteredimage?image_url={{}}")
    }
    next()
  })

  app.get("/filteredimage", async (request, response) => {
 
    let { image_url } = request.query;
    
    if (!image_url) {
      response.status(400).send("Image Url Missing")
    }else {

      console.log(image_url.match(image_url))
      if (!image_url.match(image_url)) {
        response.status(400).send("Give The Url Of Image")
      }else {
        
        try {
          let image_response = await filterImageFromURL(image_url)
    
          if(image_response != "no image found"){
            response.status(200).sendFile(image_response, async callback=>{
              await deleteLocalFiles([image_response])
            })
          } else {
            response.status(200).send("Error No Image URL")
          }
        } catch (err) {
          
          console.error(err)
          response.status(200).send("Failed")
        }
      }
    }
  } );

  

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( request, response ) => {
    response.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
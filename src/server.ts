import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { Request, Response } from 'express';


(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  const image_url = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpeg|jpg|gif|png|svg)/
  
  app.use(bodyParser.json());
  
  app.use(function (Request, Response, next) {
    if (Request.path != '/filteredimage') {
      Response.send("try GET /filteredimage?image_url={{}}")
    }
    next()
  })

  app.get("/filteredimage", async (Request, Response) => {
 
    let { image_url } = Request.query;
    
    if (!image_url) {
      Response.status(400).send("Image Url Missing")
    }else {

      console.log(image_url.match(image_url))
      if (!image_url.match(image_url)) {
        Response.status(400).send("Give The Url Of Image")
      }else {
        
        try {
          let image_Response = await filterImageFromURL(image_url)
    
          if(image_Response != "no image found"){
            Response.status(200).sendFile(image_Response, async callback=>{
              await deleteLocalFiles([image_Response])
            })
          } else {
            Response.status(200).send("Error No Image URL")
          }
        } catch (err) {
          
          console.error(err)
          Response.status(200).send("Failed")
        }
      }
    }
  } );

  

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( Request, Response ) => {
    Response.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
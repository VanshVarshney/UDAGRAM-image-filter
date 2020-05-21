# Udagram Image Filtering

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## Steps
`step 1:` clone this repo. </br>
`step 2:` open this repository in vs code. </br>
`step 3:` go to terminal type `npm i` to install all node dependencies. </br>
`step 4:` now type `npm run dev` the local server will started. go to postman import the postman.json file in this repo and send a request,if it  shows `status 200 OK` good to go. </br>
`step 5:` now type `npm run build` this will build the bundle to be putted in EBS. </br>
`step 6:` now time for Deploy on AWS Elastic Beanstalk `eb init` Choose Region And All Stuffs. </br>
`step 7:` add this line `deploy:  artifact: ./www/Archive.zip` in  `.elasticbeanstalk/config.yaml` THIS is MUST. </br>
`step 8:` type `eb create` for creating the environment in EBS. </br>
`step 9:` Now Final Step `eb deploy` for deploying the application. </br>
 

# URL For Checking Udagram

AWS Elastic Beanstalk END-Point : http://udagram-dev222222.us-east-1.elasticbeanstalk.com/

### Test
Unfiltered Image &nbsp;

Link 1 : https://image.shutterstock.com/image-photo/blue-compact-suv-car-sport-600w-1048266268.jpg &nbsp;

Link 2 : https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg &nbsp;

Filtered Image &nbsp;

For Link 1 :http://udagram-dev222222.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://image.shutterstock.com/image-photo/blue-compact-suv-car-sport-600w-1048266268.jpg &nbsp;

For Link 2 :http://udagram-dev222222.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg  &nbsp;
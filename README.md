
## MY HOME

My-Home is a responsive web application to help people better use the things in their lives. It’s a site to develop best practices using manuals, operating videos and other information for all the appliances and other technology in their home. 

My-Home is built with JavaScript and React for the front-end, and Rails, Ruby and PostgreSQL for the back-end.  I used Devise for Authentication and Authorization,  and used both Dropzone and CarrierWave for file and image uploads.  My-Home stores images and documents on Amazon's AWS S3 Cloud Storage.

[See the deployed application on Heroku](https://my-home-222.herokuapp.com/)

# ![splash-screen](https://jkorenstein-production.s3.amazonaws.com/my-home/promo/SplashScreen.png)

# ![rooms](https://jkorenstein-production.s3.amazonaws.com/my-home/promo/Rooms.png)

# ![possession](https://jkorenstein-production.s3.amazonaws.com/my-home/promo/Possession.png)

## Developer
- Jeff Korenstein

## Built with
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/13/index.html)
- [Foundation](https://get.foundation/)

## Run Locally
The setup steps expect the following tools/versions:
- Ruby 2.7.1
- Rails 5.2.3
- PostgreSQL 13

###### Clone the Repo
```
git clone 
```
###### Install Dependencies
```
yarn install 
bundle install 
```

###### Create and seed the database
```
bundle exec rake db: migrate
bundle exec rake db: seed
```

###### Run the test suite
```
bundle exec rspec
```
###### Start the Rails server and webpack-dev-server
```
bundle exec rails s
yarn run start
```

###### The application can be accessed locally at <http://localhost:3000>

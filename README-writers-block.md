# WRITERS' BLOCK
Writer's Block is a social application for writers seeking feedback for their current writing projects. Upon registration, a writer can create a personal profile and add project listings to their profile. These listings include a title, description, relevant tags, and a comparable published work (integrated through the GoodReads API). A writer can use the tag-based search function, in order to find projects they would like to offer feedback on. Once they find a project that interests them, they may visit the other writer's profile and initiate a conversation to see if they'd be a good fit for collaboration. As a project evolves over time, a writer can update their project listing with any new information, or they may delete the project from their profile altogether.

This application uses the Devise and CarrierWave gems as well as React Dropzone, React Masonry, and React Select. It also uses AWS S3 Cloud Storage and ActiveRecord.

[See the deployed application on Heroku](https://writers-block-app.herokuapp.com/)

[![Codeship Status for liishi/writers-block](https://app.codeship.com/projects/50a00183-599f-484e-a92b-3cdd75c7c77a/status?branch=main)](https://app.codeship.com/projects/416103)

## Developer
- Liishi Durbin

## Built with
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/13/index.html)

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
```
```
bundle install 
```

###### Create and seed the database
```
bundle exec rake db: migrate
```
```
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

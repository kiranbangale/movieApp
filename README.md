# udemyApp
Kinda like udemy app

I want an application which will be like udemy. There are courses each course have topics, topic have description, title and video url, every course can be subscribe by user so user will have multiple courses user can comment on subscribed courses design db for this you can use cloud storage if u want visit mlab.com this will give u mongodb free, for local u can use ur local instance, once you complete then u can point out it to mlab 
 
# udemy
    - courses[]
        - course{}
            - topics[]
            - description
            - title
            - video url
            - tags[]
            - isAvailable
            - author

    - users[] -- Roles: author, subscriber
        - subscribers[]
            - subscriptions[]
                - courses[]
                    - course{}
                        - user comments
        - authors[]
            - author{}
                - courses[]
            


#DB
    - use udemy-app
    - show collections
    - db.createCollection('courses') // MongoDb, MEAN, NodeJs, ExpressJs, AngularJs, Javascript, HTML5, CSS3, SASS, Bootstrap4, GraphQl, Pythan, Go
    - db.createCollection('topics') // Authentication, Serverless, Firebase, Responsive
    - db.createCollection('tags') // Backend, Frontend, FullStack, MeanStack, Web Development
    - db.createCollection('roles') // Subscriber, Author
    - db.createCollection('users') 

    - db.courses.insert({name: 'MongoDb'})
    - db.courses.find()

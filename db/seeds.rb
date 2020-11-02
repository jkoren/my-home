User.destroy_all
dave = User.create(email: "dave@gmail.com",password: "testtest")

bob = User.create(email: "bob@gmail.com", password: "testtest")

living_room_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/living_room.jpg'))
kitchen_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/kitchen.jpg'))
master_bedroom_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/master_bedroom.jpg'))

Room.destroy_all

living_room = Room.create(name: "Living Room",description: "Where we hang out mostly", image: living_room_image, user: dave)

kitchen = Room.create(name: "Kitchen",description: "State of the Art", image: kitchen_image, user: dave)

master_bedroom = Room.create(name:"Master Bedroom",description: "Spacious", image: master_bedroom_image, user: dave)
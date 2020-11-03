User.destroy_all
dave = User.create(email: "dave@gmail.com",password: "testtest")
bob = User.create(email: "bob@gmail.com", password: "testtest")

living_room_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/living_room.jpg'))
kitchen_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/kitchen.jpg'))
master_bedroom_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/master_bedroom.jpg'))

generic_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

Room.destroy_all
Room.create(name: "Living Room",description: generic_description, image: living_room_image, user: dave)
Room.create(name: "Kitchen",description: generic_description, image: kitchen_image, user: dave)
Room.create(name:"Master Bedroom",description: generic_description, image: master_bedroom_image, user: dave)
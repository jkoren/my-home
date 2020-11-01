User.destroy_all
dave = User.new(email: "dave@gmail.com")
dave.password = "testtest"
dave.save
bob = User.new(email: "bob@gmail.com")
bob.password = "testtest"
bob.save

living_room_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/living_room.jpg'))
kitchen_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/kitchen.jpg'))
master_bedroom_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/master_bedroom.jpg'))

Room.destroy_all
living_room = Room.new(name: "Living Room",description: "Where we hang out mostly")
living_room.image = living_room_image
living_room.user = dave

kitchen = Room.new(name: "Kitchen",description: "State of the Art")
kitchen.image = kitchen_image
kitchen.user = dave

master_bedroom = Room.new("Master Bedroom","Spacious")
master_bedroom.image = master_bedroom_image
master_bedroom.user = dave
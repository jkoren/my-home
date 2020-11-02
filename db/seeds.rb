User.destroy_all
dave = User.create(email: "dave@gmail.com")
dave.password = "testtest"

bob = User.create(email: "bob@gmail.com")
bob.password = "testtest"

living_room_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/living_room.jpg'))
kitchen_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/kitchen.jpg'))
master_bedroom_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/master_bedroom.jpg'))

# Room.destroy_all
# living_room = Room.create(name: "Living Room",description: "Where we hang out mostly")
# living_room.image = living_room_image
# living_room.user = dave

# kitchen = Room.create(name: "Kitchen",description: "State of the Art", user: dave, image: kitchen_image)
# kitchen.image = kitchen_image
# kitchen.user = dave

# master_bedroom = Room.create("Master Bedroom","Spacious")
# master_bedroom.image = master_bedroom_image
# master_bedroom.user = dave
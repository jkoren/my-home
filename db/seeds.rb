User.destroy_all
dave = User.create(email: "dave@gmail.com",password: "testtest")
bob = User.create(email: "bob@gmail.com", password: "testtest")

living_room_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/living_room.jpg'))
kitchen_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/kitchen.jpg'))
master_bedroom_image = File.open(File.join( Rails.root, 'app/assets/images/seed_images/master_bedroom.jpg'))

master_bedroom_description = "Full Bathroom, Walk-In Closet, Hardwood Flooring, 13 x 13, Second Floor."
bedroom_2_description = "Full Bathroom, Hardwood Flooring, 11 x 17, Third Floor"
kitchen_description = "Hardwood Flooring, Stone/Granite/Solid Countertops, Recessed Lighting, Stainless Steel Appliances, 13 x 12, First Floor"
living_room_description = "Hardwood Flooring, Recessed Lighting, Wainscoting, Crown Molding, 12 x 16, First Floor"

Room.destroy_all
Room.create(name:"Master Bedroom",description: master_bedroom_description, image: master_bedroom_image, user: dave)

Room.create(name:"Bedroom 2",description: bedroom_2_description, user: dave)

Room.create(name: "Kitchen",description: kitchen_description, image: kitchen_image, user: dave)

Room.create(name: "Living Room",description: living_room_description, image: living_room_image, user: dave)
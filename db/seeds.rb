User.destroy_all
dave = User.create(email: "dave@gmail.com",password: "testtest")
bob = User.create(email: "bob@gmail.com", password: "testtest")

living_room_image = File.open(File.join( Rails.root, '../app/assets/images/seed_images/rooms/living_room.jpg '))
kitchen_image = File.open(File.join( Rails.root, '../app/assets/images/seed_images/rooms/kitchen.jpg'))
master_bedroom_image = File.open(File.join( Rails.root, '../app/assets/images/seed_images/rooms/master_bedroom.jpg'))

master_bedroom_description = "Full Bathroom, Walk-In Closet, Hardwood Flooring, 13 x 13, Second Floor."
bedroom_2_description = "Full Bathroom, Hardwood Flooring, 11 x 17, Third Floor"
kitchen_description = "Hardwood Flooring, Stone/Granite/Solid Countertops, Recessed Lighting, Stainless Steel Appliances, 13 x 12, First Floor"
living_room_description = "Hardwood Flooring, Recessed Lighting, Wainscoting, Crown Molding, 12 x 16, First Floor"

Room.destroy_all
Room.create(name:"Master Bedroom",description: master_bedroom_description, image: master_bedroom_image, user: dave)

Room.create(name:"Bedroom 2",description: bedroom_2_description, user: dave)

kitchen=Room.create(name: "Kitchen",description: kitchen_description, image: kitchen_image, user: dave)

Room.create(name: "Living Room",description: living_room_description, image: living_room_image, user: dave)


Possession.destroy_all
cuisinart_owners_manual = "../app/assets/documents/seed_pdfs/kitchen/Cuisnart DLC-8S instruction and recipe book.pdf"
cuisinart_picture = "../app/assets/images/seed_images/possessions//kitchen/cuisinart-DLC-8S.jpg"
cuisinart_description = "From the Cuisinart Pro Custom 11™ 11 Cup Food Processor's cover with large feed tube and unique compact chopping/kneading cover, to its industrial quality motor, this kitchen powerhouse is built to deliver professional results year after year. With two different slicing discs, a shredding disc, a chopping/mixing blade, and two sizes of pushers, you can make fast work of any recipe prep without breaking a sweat. "
cuisinart_operating_video = "https://www.youtube.com/watch?v=2MnNeKrF7b4"

Possession.create(
  name:"Cuisinart", 
  manufacturer: "Cuisinart", 
  model: "DLC-8S",
  owners_manual: cuisinart_owners_manual,
  description: cuisinart_description, 
  image: cuisinart_picture,
  URL:  "https://www.cuisinart.com/shopping/discontinued/food_processors/dlc-8s/",
  operating_video: cuisinart_operating_video,
  room: kitchen)
  
  # t.string :name, null: false
  # t.string :manufacturer, null: false
  # t.string :model
  # t.string :owners_manual
  # t.string :image
  # t.string :operating_video
  # t.text :description
  # t.date :purchase_date
  # t.string :purchase_price
  # t.integer :year_built
  # t.string :purchased_from
  # t.string :purchase_receipt
  
  # t.belongs_to :room, null:false
  
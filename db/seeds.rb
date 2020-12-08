# seeds.rb 

# delete and recreate Arlo and all his residences, and the users for his residences - leave everything else alone

arlo = Realtor.find_by(name: 'Arlo Nugent')
arlo.destroy if arlo

colleen = User.find_by(email: 'colleen@gmail.com')
colleen.destroy if colleen

barbara = User.find_by(email: 'barbara@gmail.com')
barbara.destroy if barbara
  
matthew = User.find_by(email: 'matthew@gmail.com')
matthew.destroy if matthew

# start creating data

arlo_image = File.open(File.join( Rails.root,'/app/assets/images/seed_images/realtors/arlo_nugent.jpg'))

arlo = Realtor.create(
  name: "Arlo Nugent",
  company: "Blue Chip Realty Group",
  aws_image: arlo_image,
  phone_number: "(866) 823-6302",
  email: "anugent@bluechiprealtygroup.com",
  URL: "https://bluechiprealtygroup.com/"
)

CollegeFarmRoad = Residence.create(
  name: "315 College Farm Rd #6",
  street: "315 College Farm Rd #6",
  city: "Waltham",
  state: "MA",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/residences/315CollegeFarm.jpg')),
  realtor: arlo
)

BarbaraRoad = Residence.create(
  name: "59 Barbara Rd #1",
  street: "59 Barbara Rd #1",
  city: "Waltham",
  state: "MA",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/residences/59Barbara.jpg')),
  realtor: arlo
)

MatthewLane = Residence.create(
  name: "41 Matthew Ln",
  street: "41 Matthew Ln",
  city: "Waltham",
  state: "MA",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/residences/41Matthew.jpg')),
  realtor: arlo
)

colleen = User.create(email: "colleen@gmail.com", password: "testtest", residence: CollegeFarmRoad)
barbara = User.create(email: "barbara@gmail.com", password: "testtest", residence: BarbaraRoad)
matthew = User.create(email: "matthew@gmail.com", password: "testtest", residence: MatthewLane)


kitchen_description = "Hardwood Flooring, Stone/Granite/Solid Countertops, Recessed Lighting, Stainless Steel Appliances, 13 x 12, First Floor"
kitchen=Room.create(
  name: "Kitchen", 
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315kitchen.jpg')),
  description: kitchen_description, 
  residence: CollegeFarmRoad
)

laundry_room_description = "Third Floor, with Washer and Dryer"
laundry_room=Room.create(
  name: "Laundry Room",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315laundryroom.jpg')),
  description: laundry_room_description, 
  residence: CollegeFarmRoad,
)

master_bedroom_description = "Full Bathroom, Walk-In Closet, Hardwood Flooring, 13 x 13, Second Floor."
Room.create(
  name:"Master Bedroom",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315masterbedroom.jpg')),
  description: master_bedroom_description, 
  residence: CollegeFarmRoad
)

bedroom_2_description = "Full Bathroom, Hardwood Flooring, 11 x 17, Third Floor"
Room.create(
  name:"Bedroom 2",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315bedroom2.jpg')),
  description: bedroom_2_description, 
  residence: CollegeFarmRoad
)

living_room_description = "Hardwood Flooring, Recessed Lighting, Wainscoting, Crown Molding, 12 x 16, First Floor"
living_room = Room.create(
  name: "Living Room",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315livingroom.jpg')),
  description: living_room_description,
  residence: CollegeFarmRoad
)

garage = Room.create(
  name: "Garage",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315garage.jpeg')),
  residence: CollegeFarmRoad
)

basement = Room.create(
  name: "Basement",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315basement.jpg')),
  residence: CollegeFarmRoad
)

no_room = Room.create(
  name: "No Room",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315noroom.jpg')),
  description: "Items that move from Room to Room",
  residence: CollegeFarmRoad
)
invoice_jpg = File.open(File.join( Rails.root, '/app/assets/documents/purchase_receipts/dehumidier invoice.jpg'))

warranty_jpg = File.open(File.join( Rails.root, '/app/assets/documents/warranties/dishwasher-page-001.jpg'))

dishwasher_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/dishwasher.jpeg'))
dishwasher_owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/Dishwasher.pdf'))
dishwasher_description = "The ULTRA WASH® Soil Removal System gives you sparkling clean dishes, while using less energy and time. The ULTRA WASH® Soil Removal System includes a Triple Action Filtration system that intermittently filters soil from the wash water, thus eliminating the need to scrape dishes."
Possession.create(
  name:"Dishwasher", 
  manufacturer: "Kenmore", 
  model: "Ultra Wash 665.1372",
  aws_image: dishwasher_image,
  aws_owners_manual: dishwasher_owners_manual_pdf,
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  description: dishwasher_description, 
  URL:  "https://www.kenmore.com/products/kenmore-elite-14793-24-built-in-dishwasher-stainless-steel",
  operating_video: "https://www.youtube.com/watch?v=g_dfzV2EiU8",
  room: kitchen
)

image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/cuisinart.jpg'))
owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/Cuisinart.pdf'))
description = "From the Cuisinart Pro Custom 11™ 11 Cup Food Processor's cover with large feed tube and unique compact chopping/kneading cover, to its industrial quality motor, this kitchen powerhouse is built to deliver professional results year after year. With two different slicing discs, a shredding disc, a chopping/mixing blade, and two sizes of pushers, you can make fast work of any recipe prep without breaking a sweat. "
Possession.create(
  name:"Cuisinart", 
  manufacturer: "Cuisinart", 
  model: "DLC-8S",
  aws_image: image,
  aws_owners_manual: owners_manual_pdf,
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  description: description, 
  URL:  "https://www.cuisinart.com/shopping/discontinued/food_processors/dlc-8s/",
  operating_video: "https://www.youtube.com/watch?v=2MnNeKrF7b4",
  room: kitchen
)

image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/microwave.jpg'))
owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/Cuisinart.pdf'))
Possession.create(
  name:"Microwave", 
  manufacturer: "KitchenAid", 
  model: "KMLS311HSS",
  description: "30 Inch Wide 1.1 Cu. Ft. 1000 Watt Over the Range Microwave",
  aws_image: image,
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  aws_owners_manual: owners_manual_pdf,
  room: kitchen
)

image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/range.jpg'))
owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/range-blue-star.pdf'))
Possession.create(
  name:"Range", 
  manufacturer: "BlueStar", 
  model: "RNB366BV2",
  description: "Nova Series 36 Inch Wide 5.1 Cu. Ft. Free Standing Natural Gas Range",
  aws_image: image,
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  aws_owners_manual: owners_manual_pdf,
  room: kitchen
)

refrigerator_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/refrigerator.jpg'))
owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/Refrigerator.pdf'))
Possession.create(
  name:"Refrigerator", 
  manufacturer: "KitchenAid", 
  model: "KRFC300ESS",
  description: "36 Inch Wide 20 Cu. Ft. Counter Depth French Door Refrigerator with Interior Water Dispenser",
  aws_image: refrigerator_image,
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  aws_owners_manual: owners_manual_pdf,
  room: kitchen
)

dryer_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/dryer.jpg'))
owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/Dryer.pdf'))
Possession.create(
  name:"Dryer", 
  manufacturer: "Whirlpool", 
  model: "WGD8620HW",
  description: "27 Inch Wide 7.4 Cu Ft. Energy Star Rated Gas Dryer",
  aws_image: dryer_image,
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  aws_owners_manual: owners_manual_pdf,
  room: laundry_room
)

washingMachine_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/washing-machine.jpg'))
owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/washing_machine.pdf'))
Possession.create(
  name:"Washing Machine", 
  manufacturer: "LG", 
  model: "WM9000HVA",
  description: "5.2 Cubic Feet Mega Capacity Washing Machine with On-Door Control Panel and TurboWash",
  aws_image: washingMachine_image,
  URL: 'http://gscs-manual.lge.com/DFZ/MFL67737697/en-us/main.html',
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  aws_owners_manual: owners_manual_pdf,
  room: laundry_room
)

thermostat_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/thermostat.jpg'))
owners_manual_pdf = File.open(File.join( Rails.root, '/app/assets/documents/owners_manuals/Google-Nest-Thermostat-Welcome-Guide.pdf'))
Possession.create(
  name:"Thermostat", 
  manufacturer: "Google Nest", 
  model: "T3019US",
  description: "Nest Learning Thermostat - 3rd Generation",
  aws_image: thermostat_image,
  aws_warranty: warranty_jpg,
  aws_purchase_receipt: invoice_jpg,
  aws_owners_manual: owners_manual_pdf,
  room: living_room
)

# for demo
# Espresso Machine
# Rocket
# r58 v2 
# Dual boiler with E61 group head and rotary pump

# --- run one time

# no_realtor_image = File.open(File.join( Rails.root,'/app/assets/images/seed_images/realtors/person-icon-person-icon-17.jpg'))

# dave = Realtor.create(
#   name: "Dave Digregorio",
#   company: "Coldwell Banker Residential Brokerage",
#   phone_number: "617-909-7888",
#   email: "dave@davedrealestate.com",
#   URL: "https://www.davedrealestate.com/"
# )

# no_realtor = Realtor.create(
#   name: "My-Home",
#   aws_image: no_realtor_image,
#   URL: "https://my-home-222.herokuapp.com/providethis"
# )

# GroveRoad = Residence.create(
#   name: "18 Grove Road",
#   street: "18 Grove Road",
#   city: "Waltham",
#   state: "MA",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/residences/18Grove.jpg')),
#   realtor: dave
# )

# jeff = User.create(email: "jeff@gmail.com", password: "testtest", residence: GroveRoad)

# Room.create(
#     name: "Master Bedroom",
#     # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#     aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#     description: "",
#     residence: GroveRoad
#   )

# Room.create(
#   name: "Nicole & Olivia\'s Bedroom",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "Noah & Sophie\'s Bedroom",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "Master Bathroom",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "Kid\'s Bathroom",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )


# Room.create(
#   name: "Kitchen",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "Basement",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "Jeff\'s Office",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "Den",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "Living Room",
#   # image: "https://images.unsplash.com/photo-1559311648-d46f5d8593d6",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/no_photo.jpeg')),
#   description: "",
#   residence: GroveRoad
# )

# Room.create(
#   name: "No Room",
#   # image: "https://b-i.forbesimg.com/jaysondemers/files/2013/11/mobile-devices-300x196.jpg",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/18/18noroom.jpg')),
#   description: "Items that move from Room to Room",
#   residence: GroveRoad
# )

# testing
# laundry_room = Room.find(602)
# poss = Possession.new(name: "cat", manufacturer: "cat's mom", room: laundry_room)
# poss.save
# cat_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/washing-machine.jpg'))
# cat_pdf = washingMachine_image = File.open(File.join( Rails.root, '/app/assets/documents/seed_pdfs/laundry-room/dryer.pdf'))
# poss.aws_image = cat_image
# poss.aws_owners_manual = cat_pdf
# poss.save

hans = Realtor.create(
  name: "Hans Brings",
  company: "Coldwell Banker Residential Brokerage",
  phone_number: "(617)968-0022",
  email: "hans@hansbrings.com",
  URL: "https://www.hansbrings.com/"
)

circle = Residence.create(
  name: "82 Circle Dr",
  street: "82 Circle Dr",
  city: "Waltham",
  state: "MA",
  realtor: hans
)

  circle_image = File.open(File.join( Rails.root,'/app/assets/images/seed_images/residences/82circle.jpg'))
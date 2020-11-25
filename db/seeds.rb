# seeds.rb 

# delete and recreate Arlo and all his residences - leave everything else alone

old_arlo = Realtor.find_by(name: 'Arlo Nugent')
if old_arlo != nil
  old_arlo.destroy
end
# -----
# start creating data
# dave = User.create(email: "dave@gmail.com",password: "testtest")

arlo_image = File.open(File.join( Rails.root,'/app/assets/images/seed_images/realtors/arlo_nugent.jpg'))

arlo = Realtor.create(
  name: "Arlo Nugent",
  company: "Blue Chip Realty Group",
  # image: "https://s3-media0.fl.yelpcdn.com/bphoto/GWQp_QqlWimHrpWaq2hCCQ/o.jpg",
  aws_image: arlo_image,
  phone_number: "(866) 823-6302",
  email: "anugent@bluechiprealtygroup.com",
  URL: "bluechiprealtygroup.com"
)

# Residence.destroy_all

CollegeFarmRoad = Residence.create(
  name: "315 College Farm Rd #6",
  street: "315 College Farm Rd #6",
  city: "Waltham",
  state: "MA",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/locations/315CollegeFarm.jpg')),
  realtor: arlo
)

BarbaraRoad = Residence.create(
  name: "59 Barbara Rd #1",
  street: "59 Barbara Rd #1",
  city: "Waltham",
  state: "MA",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/locations/59Barbara.jpg')),
  realtor: arlo
)

MatthewLane = Residence.create(
  name: "41 Matthew Ln",
  street: "41 Matthew Ln",
  city: "Waltham",
  state: "MA",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/locations/41Matthew.jpg')),
  realtor: arlo
)

# Room.destroy_all

master_bedroom_description = "Full Bathroom, Walk-In Closet, Hardwood Flooring, 13 x 13, Second Floor."
bedroom_2_description = "Full Bathroom, Hardwood Flooring, 11 x 17, Third Floor"
kitchen_description = "Hardwood Flooring, Stone/Granite/Solid Countertops, Recessed Lighting, Stainless Steel Appliances, 13 x 12, First Floor"
living_room_description = "Hardwood Flooring, Recessed Lighting, Wainscoting, Crown Molding, 12 x 16, First Floor"
laundry_room_description = "Third Floor, with Washer and Dryer"

kitchen=Room.create(
  name: "Kitchen", 
  # image: "https://m1.cbhomes.com/p/102/72707418/Ea96aC625cf1422/full.jpg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315kitchen.jpg')),
  description: kitchen_description, 
  residence: CollegeFarmRoad
)
laundry_room=Room.create(
  name: "Laundry Room",
  # image: "https://m.cbhomes.com/p/102/72707418/F7DfeA94271744E/full.jpg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315laundryroom.jpg')),
  description: laundry_room_description, 
  residence: CollegeFarmRoad,
)
Room.create(
  name:"Master Bedroom",
  # image: "https://m.cbhomes.com/p/102/72707418/9AdFd7AC4b124e7/full.jpg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315masterbedroom.jpg')),
  description: master_bedroom_description, 
  residence: CollegeFarmRoad
)
Room.create(
  name:"Bedroom 2",
  # image: "https://m1.cbhomes.com/p/102/72707418/99a05Ac24Ef442B/full.jpg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315bedroom2.jpg')),
  description: bedroom_2_description, 
  residence: CollegeFarmRoad
)

living_room = Room.create(
  name: "Living Room",
  # image: "https://m.cbhomes.com/p/102/72707418/3365CbB65cF34cd/full.jpg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315livingroom.jpg')),
  description: living_room_description,
  residence: CollegeFarmRoad
)

garage = Room.create(
  name: "Garage",
  # image: "https://networx.global.ssl.fastly.net/media/500x313/art_58acb8df596f2.jpeg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315garage.jpeg')),
  residence: CollegeFarmRoad
)

basement = Room.create(
  name: "Basement",
  # image: "https://www.kingofmaids.com/blog/wp-content/uploads/2017/06/basement-empty-1024x682.jpg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315basement.jpg')),
  residence: CollegeFarmRoad
)

no_room = Room.create(
  name: "No Room",
  # image: "https://b-i.forbesimg.com/jaysondemers/files/2013/11/mobile-devices-300x196.jpg",
  aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/rooms/315/315noroom.jpg')),
  description: "Items that move from Room to Room",
  residence: CollegeFarmRoad
)

#  Possession.destroy_all

dishwasher_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/dishwasher.jpeg'))

dryer_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/dryer.jpg'))

microwave_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/microwave.webp'))

range_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/range.jpg'))

refrigerator_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/refrigerator.webp'))

cuisinart_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/cuisinart.jpg'))

thermostat_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/thermostat.webp'))

washingMachine_image = File.open(File.join( Rails.root, '/app/assets/images/seed_images/possessions/washing-machine.webp'))

dishwasher_description = "The ULTRA WASH® Soil Removal System gives you sparkling clean dishes, while using less energy and time. The ULTRA WASH® Soil Removal System includes a Triple Action Filtration system that intermittently filters soil from the wash water, thus eliminating the need to scrape dishes."

Possession.create(
  name:"Dishwasher", 
  manufacturer: "Kenmore", 
  model: "Ultra Wash 665.1372",
  aws_image: dishwasher_image,
  description: dishwasher_description, 
  URL:  "https://www.kenmore.com/products/kenmore-elite-14793-24-built-in-dishwasher-stainless-steel",
  operating_video: "https://www.youtube.com/watch?v=g_dfzV2EiU8",
  owners_manual: "https://www.manualslib.com/manual/666454/Kenmore-665-1372.html?page=6",
  warranty: "https://i.sears.com/s/d/pdf/mp-tc/10130653/prod_20510932512",
  purchase_receipt: "",
  room: kitchen
)

Possession.create(
  name:"Microwave", 
  manufacturer: "KitchenAid", 
  model: "KMLS311HSS",
  description: "30 Inch Wide 1.1 Cu. Ft. 1000 Watt Over the Range Microwave",
  aws_image: microwave_image,
  URL:  "",
  operating_video: "",
  room: kitchen
)

Possession.create(
  name:"Range", 
  manufacturer: "BlueStar", 
  model: "RNB366BV2",
  description: "Nova Series 36 Inch Wide 5.1 Cu. Ft. Free Standing Natural Gas Range",
  aws_image: range_image,
  URL:  "",
  operating_video: "",
  room: kitchen
)

Possession.create(
  name:"Refrigerator", 
  manufacturer: "KitchenAid", 
  model: "KRFC300ESS",
  description: "36 Inch Wide 20 Cu. Ft. Counter Depth French Door Refrigerator with Interior Water Dispenser",
  aws_image: refrigerator_image,
  URL:  "",
  operating_video: "",
  room: kitchen
)

Possession.create(
  name:"Dryer", 
  manufacturer: "Whirlpool", 
  model: "WGD8620HW",
  description: "27 Inch Wide 7.4 Cu Ft. Energy Star Rated Gas Dryer",
  aws_image: dryer_image,
  URL:  "",
  operating_video: "",
  room: laundry_room
)

Possession.create(
  name:"Washing Machine", 
  manufacturer: "LG", 
  model: "WM9000HVA",
  description: "5.2 Cubic Feet Mega Capacity Washing Machine with On-Door Control Panel and TurboWash",
  aws_image: washingMachine_image,
  URL:  "",
  operating_video: "",
  room: laundry_room
)

# cuisinart_owners_manual = "../app/assets/documents/seed_pdfs/kitchen/Cuisnart DLC-8S instruction and recipe book.pdf"

cuisinart_description = "From the Cuisinart Pro Custom 11™ 11 Cup Food Processor's cover with large feed tube and unique compact chopping/kneading cover, to its industrial quality motor, this kitchen powerhouse is built to deliver professional results year after year. With two different slicing discs, a shredding disc, a chopping/mixing blade, and two sizes of pushers, you can make fast work of any recipe prep without breaking a sweat. "

Possession.create(
  name:"Cuisinart", 
  manufacturer: "Cuisinart", 
  model: "DLC-8S",
  owners_manual: "",
  description: cuisinart_description, 
  aws_image: cuisinart_image,
  URL:  "https://www.cuisinart.com/shopping/discontinued/food_processors/dlc-8s/",
  operating_video: "https://www.youtube.com/watch?v=2MnNeKrF7b4",
  room: kitchen)

Possession.create(
  name:"Thermostat", 
  manufacturer: "Google Nest", 
  model: "T3019US",
  description: "Nest Learning Thermostat - 3rd Generation",
  aws_image: thermostat_image,
  URL:  "",
  operating_video: "",
  room: living_room
)

# for demo
# Espresso Machine
# Rocket
# r58 v2 
# Dual boiler with E61 group head and rotary pump

# --- run one time

old_no_realtor = Realtor.find_by(name: 'No Realtor')
no_realtor_image = File.open(File.join( Rails.root,'/app/assets/images/seed_images/realtors/person-icon-person-icon-17.jpg'))
old_no_realtor.aws_image = no_realtor_image
old_no_realtor.save

# delete user jeff and all residences with no realtor and recreate (one time only)
# old_jeff = User.find_by(email: 'jeff@gmail.com')
# if old_jeff != nil
#   old_jeff.destroy
# end
# jeff = User.create(email: "jeff@gmail.com",password: "testtest")

# old_no_realtor = Realtor.find_by(name: 'No Realtor')
# if old_no_realtor != nil
#   old_no_realtor.destroy
# end
# no_realtor_image = File.open(File.join( Rails.root,'/app/assets/images/seed_images/realtors/person-icon-person-icon-17.jpg'))

# no_realtor = Realtor.create(
#   name: "No Realtor",
#   company: "",
#   image: "",
#   aws_image: no_realtor_image,
#   phone_number: "",
#   email: "",
#   URL: ""
# )

# GroveRoad = Residence.create(
#   name: "18 Grove Road",
#   street: "18 Grove Road",
#   city: "Waltham",
#   state: "MA",
#   aws_image: File.open(File.join( Rails.root,'/app/assets/images/seed_images/locations/18Grove.jpg')),
#   realtor: no_realtor
# )

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
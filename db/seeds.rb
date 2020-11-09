User.destroy_all
dave = User.create(email: "dave@gmail.com",password: "testtest")
bob = User.create(email: "bob@gmail.com", password: "testtest")

Residence.destroy_all

CollegeFarmRoad = Residence.create(
  name: "315 College Farm Rd #6",
  street: "315 College Farm Rd #6",
  city: "Waltham",
  state: "MA",
  image: "https://m1.cbhomes.com/p/102/72707418/bf5EFC892DD14f6/full.jpg"
)

BarbaraRoad = Residence.create(
  name: "59 Barbara Rd #1",
  street: "59 Barbara Rd #1",
  city: "Waltham",
  state: "MA",
  image: "https://m.cbhomes.com/p/102/72753295/747777af3519434/full.jpg"
)

MatthewLane = Residence.create(
  name: "41 Matthew Ln",
  street: "41 Matthew Ln",
  city: "Waltham",
  state: "MA",
  image: "https://m.cbhomes.com/p/102/72753147/1Bd3F36Aac3142B/full.jpg"
)

Room.destroy_all

master_bedroom_description = "Full Bathroom, Walk-In Closet, Hardwood Flooring, 13 x 13, Second Floor."
bedroom_2_description = "Full Bathroom, Hardwood Flooring, 11 x 17, Third Floor"
kitchen_description = "Hardwood Flooring, Stone/Granite/Solid Countertops, Recessed Lighting, Stainless Steel Appliances, 13 x 12, First Floor"
living_room_description = "Hardwood Flooring, Recessed Lighting, Wainscoting, Crown Molding, 12 x 16, First Floor"
laundry_room_description = "Third Floor, with Washer and Dryer"

kitchen=Room.create(
  name: "Kitchen", 
  image: "https://m1.cbhomes.com/p/102/72707418/Ea96aC625cf1422/full.jpg",
  description: kitchen_description, 
  residence: CollegeFarmRoad,
  user: dave
)
laundry_room=Room.create(
  name: "Laundry Room",
  # image: "https://m.cbhomes.com/p/102/72707418/F7DfeA94271744E/full.jpg",
  image: "https://m1.cbhomes.com/p/102/72753147/0D6f2Eb53F8B4C9/full.jpg",
  description: laundry_room_description, 
  residence: CollegeFarmRoad,
  user: dave
)
Room.create(
  name:"Master Bedroom",
  image: "https://m.cbhomes.com/p/102/72707418/9AdFd7AC4b124e7/full.jpg",
  description: master_bedroom_description, 
  residence: CollegeFarmRoad,
  user: dave
)
Room.create(
  name:"Bedroom 2",
  image: "https://m1.cbhomes.com/p/102/72707418/99a05Ac24Ef442B/full.jpg",
  description: bedroom_2_description, 
  residence: CollegeFarmRoad,
  user: dave
)

living_room = Room.create(
  name: "Living Room",
  image: "https://m.cbhomes.com/p/102/72707418/3365CbB65cF34cd/full.jpg",
  description: living_room_description,
  residence: CollegeFarmRoad, 
  user: dave
)

garage = Room.create(
  name: "Garage",
  image: "https://networx.global.ssl.fastly.net/media/500x313/art_58acb8df596f2.jpeg",
  residence: CollegeFarmRoad, 
  user: dave
)


basement = Room.create(
  name: "Basement",
  image: "https://www.kingofmaids.com/blog/wp-content/uploads/2017/06/basement-empty-1024x682.jpg",
  residence: CollegeFarmRoad, 
  user: dave
)


no_room = Room.create(
  name: "No Room",
  image: "https://b-i.forbesimg.com/jaysondemers/files/2013/11/mobile-devices-300x196.jpg",
  description: "Items that move from Room to Room",
  residence: CollegeFarmRoad, 
  user: dave
)

Possession.destroy_all
dishwasher_description = "The ULTRA WASH® Soil Removal System gives you sparkling clean dishes, while using less energy and time. The ULTRA WASH® Soil Removal System includes a Triple Action Filtration system that intermittently filters soil from the wash water, thus eliminating the need to scrape dishes."

Possession.create(
  name:"Dishwasher", 
  manufacturer: "Kenmore", 
  model: "Ultra Wash 665.1372",
  description: dishwasher_description, 
  image: "https://c.shld.net/rpx/i/s/i/spin/10130653/prod_17810015912",
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
  image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kitchenaid/kitchenaid-kmls311hss-main-1.jpg",
  URL:  "",
  operating_video: "",
  room: kitchen
)

Possession.create(
  name:"Range", 
  manufacturer: "BlueStar", 
  model: "RNB366BV2",
  description: "Nova Series 36 Inch Wide 5.1 Cu. Ft. Free Standing Natural Gas Range",
  image: "https://s3.img-b.com/image/private/t_base,c_lpad,dpr_auto,w_450,h_450/product/bluestar/bluestar-rnb366bv2-3492701.jpg",
  URL:  "",
  operating_video: "",
  room: kitchen
)

Possession.create(
  name:"Refrigerator", 
  manufacturer: "KitchenAid", 
  model: "KRFC300ESS",
  description: "36 Inch Wide 20 Cu. Ft. Counter Depth French Door Refrigerator with Interior Water Dispenser",
  image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kitchenaid/kitchenaid-krfc300ess-front.jpg",
  URL:  "",
  operating_video: "",
  room: kitchen
)

Possession.create(
  name:"Dryer", 
  manufacturer: "Whirlpool", 
  model: "WGD8620HW",
  description: "27 Inch Wide 7.4 Cu Ft. Energy Star Rated Gas Dryer",
  image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/whirlpool/whirlpool-wgd8620hw-7606622.jpg",
  URL:  "",
  operating_video: "",
  room: laundry_room
)

# this is failing
Possession.create(
  name:"Washing Machine", 
  manufacturer: "LG", 
  model: "WM9000HVA",
  description: "5.2 Cubic Feet Mega Capacity Washing Machine with On-Door Control Panel and TurboWash",
  image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/lg/wm9000hva-(1).jpg",
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
  image: "https://i.pinimg.com/originals/ae/54/86/ae5486c24ae20743550e13afcf153ddc.jpg",
  URL:  "https://www.cuisinart.com/shopping/discontinued/food_processors/dlc-8s/",
  operating_video: "https://www.youtube.com/watch?v=2MnNeKrF7b4",
  room: kitchen)

Possession.create(
  name:"Thermostat", 
  manufacturer: "Google Nest", 
  model: "T3019US",
  description: "Nest Learning Thermostat - 3rd Generation",
  image: "https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/googlenest/google-nest-t3019us-6520654.jpg",
  URL:  "",
  operating_video: "",
  room: living_room
)

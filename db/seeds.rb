User.destroy_all
dave = User.create(email: "dave@gmail.com",password: "testtest")
bob = User.create(email: "bob@gmail.com", password: "testtest")

# living_room_image = File.open(File.join( Rails.root, '../app/assets/images/seed_images/rooms/living_room.jpg'))
# kitchen_image = File.open(File.join( Rails.root, '../app/assets/images/seed_images/rooms/kitchen.jpg'))
# master_bedroom_image = File.open(File.join( Rails.root, '../app/assets/images/seed_images/rooms/master_bedroom.jpg'))

Room.destroy_all

master_bedroom_description = "Full Bathroom, Walk-In Closet, Hardwood Flooring, 13 x 13, Second Floor."
bedroom_2_description = "Full Bathroom, Hardwood Flooring, 11 x 17, Third Floor"
kitchen_description = "Hardwood Flooring, Stone/Granite/Solid Countertops, Recessed Lighting, Stainless Steel Appliances, 13 x 12, First Floor"
living_room_description = "Hardwood Flooring, Recessed Lighting, Wainscoting, Crown Molding, 12 x 16, First Floor"
laundry_room_description = "Third Floor, with Washer and Dryer"

kitchen=Room.create(name: "Kitchen",description: kitchen_description, user: dave)
laundry_room=Room.create(name: "Laundry Room",description: laundry_room_description, user: dave)
Room.create(name:"Master Bedroom",description: master_bedroom_description, user: dave)
Room.create(name:"Bedroom 2",description: bedroom_2_description, user: dave)
living_room = Room.create(name: "Living Room",description: living_room_description, user: dave)

Possession.destroy_all
cuisinart_owners_manual = "../app/assets/documents/seed_pdfs/kitchen/Cuisnart DLC-8S instruction and recipe book.pdf"
cuisinart_picture = "../app/assets/images/seed_images/possessions/kitchen/cuisinart-DLC-8S.jpg"
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

dishwasher_operating_video = "https://www.youtube.com/watch?v=g_dfzV2EiU8"
dishwasher_description = "The ULTRA WASH® Soil Removal System gives you sparkling clean dishes, while using less energy and time. The ULTRA WASH® Soil Removal System includes a Triple Action Filtration system that intermittently filters soil from the wash water, thus eliminating the need to scrape dishes."

Possession.create(
  name:"Dishwasher", 
  manufacturer: "Kenmore", 
  model: "Ultra Wash 665.1372",
  description: dishwasher_description, 
  image: "../app/assets/images/seed_images/possessions/kitchen/cuisinart-DLC-8S.jpg",
  URL:  "https://www.kenmore.com/products/kenmore-elite-14793-24-built-in-dishwasher-stainless-steel",
  operating_video: dishwasher_operating_video,
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
  name:"Dryer", 
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
  
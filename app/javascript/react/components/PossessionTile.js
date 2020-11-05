import React from "react"

const PossessionShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5> 
        <h5><a href={props.data.operating_video}>Operating Video</a></h5>     
        <h5>{props.data.image}</h5>  
        <h5>{props.data.owners_manual}</h5>
        <h5>{props.data.URL}</h5>
        <h5>{props.data.purchase_receipt}</h5>
      </div>
    </div>
  )
}

// create_table "possessions", force: : cascade do | t |
//   t.string "name", null: false
// t.string "manufacturer", null: false
// t.string "model"
// t.string "owners_manual"
// t.text "description"
// t.integer "year_built"
// t.string "purchased_from"
// t.string "image"
// t.date "purchase_date"
// t.string "purchase_receipt"
// t.string "purchase_price"
// t.bigint "room_id", null: false
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.string "operating_video"
// t.string "URL"
// t.index["room_id"], name: "index_possessions_on_room_id"
// end

export default PossessionShowTile
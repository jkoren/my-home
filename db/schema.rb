# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_01_230547) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.string "action", null: false
    t.string "table", null: false
    t.integer "id_of_item"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", default: "unknown"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "possessions", force: :cascade do |t|
    t.string "name", null: false
    t.string "manufacturer", null: false
    t.string "model"
    t.text "description"
    t.string "purchase_receipt"
    t.bigint "room_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "operating_video"
    t.string "URL"
    t.string "aws_image"
    t.string "aws_owners_manual"
    t.string "aws_purchase_receipt"
    t.string "aws_warranty"
    t.boolean "share_on_new_possession_list", default: true
    t.string "aws_tag"
    t.index ["room_id"], name: "index_possessions_on_room_id"
  end

  create_table "realtors", force: :cascade do |t|
    t.string "name", null: false
    t.string "company"
    t.string "image"
    t.string "aws_image"
    t.string "phone_number"
    t.string "email"
    t.string "URL"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "residences", force: :cascade do |t|
    t.string "name", null: false
    t.text "street"
    t.text "street2"
    t.text "city"
    t.text "state"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "realtor_id"
    t.string "aws_image"
    t.string "zip_code", default: "02451"
    t.text "note"
    t.index ["realtor_id"], name: "index_residences_on_realtor_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "residence_id"
    t.string "aws_image"
    t.index ["residence_id"], name: "index_rooms_on_residence_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.bigint "residence_id"
    t.string "role", default: "member", null: false
    t.string "screen_name", default: "-", null: false
    t.boolean "allow_leaderboard", default: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["residence_id"], name: "index_users_on_residence_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end

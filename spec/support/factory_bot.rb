# factory.bot.rb 
require 'factory_bot'

FactoryBot.define do

  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    role {'member'}
  end
  
end

  # http://railscasts.com/episodes/158-factories-not-fixtures-revised
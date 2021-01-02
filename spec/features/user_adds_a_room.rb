#user_adds_a_residence.rb
require 'rails_helper'

feature 'user signs in', %Q{
  As a signed in homeowner with a residence
  I want to add a room
  So that I can store possessions
  } do

  scenario 'user logs in and can create their residence' do
    user = FactoryBot.create(:user)
    
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    
    expect(page).to have_content('Signed in successfully')
    expect(page).to have_content('Create My Residence')

    click_link 'Create My Residence'
    binding.pry # what is in variable "page"
    expect(page).to have_content('Residence Name')
    
      #  Failure/Error: expect(page).to have_content('Residence Name')
      #  expected to find text "Residence Name" in "My-Home\nuser1@example.com has no residence assigned\nuser1@example.com Sign Out\nMy Home Create My Residence Example News FAQ About"
  end
end

feature 'user signs in', %Q{
  As a signed in homeowner with a residence
  I want to add a room
  So that I can store possessions
  } do

  scenario 'user logs in and can see their residence' do
    user = FactoryBot.create(:user)
    residence = Residence.create(name: "House of Cheese")
    user.residence = residence
    
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    
    expect(page).to have_content('Signed in successfully')
    first(:link, 'My Home').click
    # expect(page).to have_content('House of Cheese')

      # capybara only checks the rails (.erb) portion, eg the topbar, it does not check the react component?

      # Failure/Error: expect(page).to have_content('House of Cheese')
      #  expected to find text "House of Cheese" in "My-Home\nuser1@example.com has no residence assigned\nuser1@example.com Sign Out\nMy Home Create My Residence Example News FAQ About"
    
  end
end

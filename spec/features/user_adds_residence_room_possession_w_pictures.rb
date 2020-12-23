# require 'rails_helper'


# feature 'user signs in', %Q{
#   As a signed up user
#   I want to add a residence
#   So that I can create rooms and store possessions
#   } do

#   scenario 'log in and create a residence' do
#     user = FactoryBot.create(:user)
    
#     visit new_user_session_path
#     fill_in 'Email', with: user.email
#     fill_in 'Password', with: user.password
#     click_button 'Log in'
    
#     click_link 'Create My Residence'
#     binding.pry
#     fill_in 'Residence Name:', :with => 'Test House'
#     click_link 'Submit'
    
#     expect(page).to have_content('Test House')
#   end
# end

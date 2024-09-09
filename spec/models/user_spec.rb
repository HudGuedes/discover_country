require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is not valid without an email' do
    user = FactoryBot.build(:user, email: nil)
    expect(user).not_to be_valid
  end

  it 'is valid with a unique email' do
    user = FactoryBot.build(:user, email: "teste@teste.com")
    expect(user).to be_valid
  end
end
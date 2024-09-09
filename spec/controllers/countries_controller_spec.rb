require 'rails_helper'

RSpec.describe CountriesController, type: :controller do
  before do
    @user = FactoryBot.create(:user)
    sign_in @user
  end

  describe 'GET #index' do
    it 'assigns @countries' do
      countries = double('countries')
      allow(CountryService).to receive(:all_countries).and_return(double(parsed_response: countries))
      get :index
      expect(assigns(:countries)).to eq(countries)
    end

    it 'renders the index template' do
      get :index
      expect(response).to render_template(:index)
    end
  end

  describe 'GET #show' do
    it 'assigns @country' do
      country = double('country')
      allow(CountryService).to receive(:country).with('1').and_return(double(parsed_response: country))
      get :show, params: { id: '1' }
      expect(assigns(:country)).to eq(country)
    end

    it 'renders the show template' do
      get :show, params: { id: '1' }
      expect(response).to render_template(:show)
    end
  end
end

class CountryService
  include HTTParty
  BASE_URI = 'https://restcountries.com/v3.1'

  def self.all_countries
    get("#{BASE_URI}/all")
  end

  def self.country(id)
    get("#{BASE_URI}/alpha/#{id}")
  end
end
# frozen_string_literal: true

class CountriesController < ApplicationController

  def index
    @countries = CountryService.all_countries.parsed_response
  end

  def show
    @country = CountryService.country(params[:id]).parsed_response
  end
end
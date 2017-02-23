class Api::SearchesController < ApplicationController
  def index
    @results = PgSearch.multisearch(params[:query]).limit(10)
  end
end

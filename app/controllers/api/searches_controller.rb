class Api::SearchesController < ApplicationController
  def index
    PgSearch.multisearch_options = {
      using: [:tsearch, :trigram]
    }

    @results = PgSearch.multisearch(params[:query]).limit(10)
  end
end

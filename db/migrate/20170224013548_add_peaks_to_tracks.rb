class AddPeaksToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :peaks, :text
  end
end

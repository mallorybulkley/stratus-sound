class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end

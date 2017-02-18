class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.date :release_date, null: false
      t.text :description
      t.string :genre, null: false
      t.integer :user_id, null: false, index: true
      t.attachment :audio
      t.attachment :photo

      t.timestamps
    end
  end
end

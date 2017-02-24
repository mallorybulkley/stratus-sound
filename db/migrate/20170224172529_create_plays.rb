class CreatePlays < ActiveRecord::Migration
  def change
    create_table :plays do |t|
      t.integer :track_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end

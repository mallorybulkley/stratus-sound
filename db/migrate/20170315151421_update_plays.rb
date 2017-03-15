class UpdatePlays < ActiveRecord::Migration
  def change
    change_column_null :plays, :user_id, true
  end
end

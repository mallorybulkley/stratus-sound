class InstallPackages < ActiveRecord::Migration
  def up
    execute "CREATE EXTENSION IF NOT EXISTS pg_trgm;"
  end

  def down
    execute "DROP EXTENSION IF EXISTS pg_trgm;"
  end
end

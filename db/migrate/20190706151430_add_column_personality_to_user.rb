class AddColumnPersonalityToUser < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :personality, :integer
  end
  def down
    remove_column :users, :personality
  end
end

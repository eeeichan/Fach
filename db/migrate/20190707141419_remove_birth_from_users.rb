class RemoveBirthFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birth, :date
  end
end

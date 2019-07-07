class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :uid
      t.string :path

      t.timestamps
    end
  end
end

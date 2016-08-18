class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :quantity
      t.string :description
      t.string :picture
      t.string :brand

      t.timestamps
    end
  end
end

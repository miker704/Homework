class Createpeople < ActiveRecord::Migration[5.2]
  def change
    create_table :People do |t|
      t.string :name, null:false
      t.integer :house_id, null:false 
    end
  end
end

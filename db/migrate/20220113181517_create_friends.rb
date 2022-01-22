class CreateFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.integer :friender_id, null: false, foreign_key: true
      t.integer :friendee_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end

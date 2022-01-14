class CreateFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.belongs_to :friender, null: false, foreign_key: true
      t.belongs_to :friendee, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class User < ApplicationRecord
    has_many :friender_relationships, foreign_key: :friender_id, class_name: "Friend"
    has_many :friendees, through: :friender_relationships

    has_many :friendee_relationships, foreign_key: :friendee_id, class_name: "Friend"
    has_many :frienders, through: :friender_relationships
end

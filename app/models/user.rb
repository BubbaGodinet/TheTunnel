class User < ApplicationRecord
    has_secure_password

    has_many :scores 
    has_many :friendee_relationships, foreign_key: :friender_id, class_name: "Friend"
    has_many :friendees, through: :friendee_relationships

    has_many :friender_relationships, foreign_key: :friendee_id, class_name: "Friend"
    has_many :frienders, through: :friender_relationships
end

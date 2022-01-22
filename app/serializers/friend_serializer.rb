class FriendSerializer < ActiveModel::Serializer
  attributes :id, :scores
  has_one :friender
  has_one :friendee
  has_many :scores
end

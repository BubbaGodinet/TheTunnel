class FriendSerializer < ActiveModel::Serializer
  attributes :id
  has_one :friender
  has_one :friendee
end

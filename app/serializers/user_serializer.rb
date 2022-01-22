class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :scores
  has_many :friendees
  has_many :scores
end

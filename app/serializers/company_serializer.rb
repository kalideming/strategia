class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :projects, :users
end

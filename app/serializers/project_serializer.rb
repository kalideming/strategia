class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :deadline
end

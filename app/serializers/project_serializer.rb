class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :deadline, :tasks, :project_roles, :users, :company 
end

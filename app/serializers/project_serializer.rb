class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :photo, :description, :deadline, :tasks, :company, :project_roles
end

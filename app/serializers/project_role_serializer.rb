class ProjectRoleSerializer < ActiveModel::Serializer
  attributes :id, :role_title, :project_head, :required_hours, :description
  has_one :project
end

class ProjectRoleSerializer < ActiveModel::Serializer

  attributes :role_title, :project_head, :required_hours, :description, :user, :project
  
end
 
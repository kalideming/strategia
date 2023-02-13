class ProjectRoleSerializer < ActiveModel::Serializer

  attributes :id, :role_title, :project_head, :required_hours, :description, :project_id, :user
  
end
 
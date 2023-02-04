class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :completed, :deadline, :project_id
  # has_one :project_role
end

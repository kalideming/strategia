class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :completed, :deadline
  has_one :project_role
end

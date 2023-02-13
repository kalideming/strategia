class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :completed, :deadline, :project_id
end

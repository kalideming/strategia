class EventSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :required_hours, :title, :description, :personal, :work, :project, :schedule_id
  # has_one :schedule
end

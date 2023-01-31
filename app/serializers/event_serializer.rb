class EventSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :required_hours, :title, :description, :personal, :work, :project
  has_one :schedule
end

class EventSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :hours_taken, :title, :description, :personal, :work, :project, :schedule_id
  belongs_to :schedule
end

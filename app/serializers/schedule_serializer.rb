class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :events
  # has_one :user
end

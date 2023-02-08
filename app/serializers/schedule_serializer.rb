class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :events
  belongs_to :user 
end

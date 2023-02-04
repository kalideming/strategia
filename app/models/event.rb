class Event < ApplicationRecord
  belongs_to :schedule

  validates_presence_of :start, :end, :title
  validates :personal, exclusion: [nil]
  validates :work, exclusion: [nil]
  validates :project, exclusion: [nil]

end

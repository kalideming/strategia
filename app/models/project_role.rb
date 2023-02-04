class ProjectRole < ApplicationRecord
  belongs_to :project
  belongs_to :user

  validates_presence_of :role_title, :required_hours
  # validation for boolean? 
end

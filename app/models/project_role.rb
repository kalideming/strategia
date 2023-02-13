class ProjectRole < ApplicationRecord
  belongs_to :project
  belongs_to :user

  # accepts_nested_attributes_for :user, :project 

  validates_presence_of :role_title, :required_hours, :project_head

end

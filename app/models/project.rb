class Project < ApplicationRecord

    belongs_to :company 
    has_many :project_roles, dependent: :destroy
    has_many :tasks, dependent: :destroy 
    has_many :users, through: :project_roles

    accepts_nested_attributes_for :project_roles

    validates_presence_of :title, :deadline
    
end

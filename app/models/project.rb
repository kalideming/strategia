class Project < ApplicationRecord

    has_many :project_roles
    has_many :tasks
    has_many :users, through: :project_roles

end

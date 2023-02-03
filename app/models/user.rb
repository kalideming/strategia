class User < ApplicationRecord
    has_secure_password

    has_many :project_roles
    has_one :schedule
    has_many :projects, through: :project_roles
    has_many :events, through: :schedule
    
end

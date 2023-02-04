class User < ApplicationRecord
    has_secure_password

    has_many :project_roles
    has_one :schedule
    has_many :projects, through: :project_roles
    has_many :events, through: :schedule

    validates_presence_of :first_name, :last_name, :email, :username, :password, :position, :company, :available_hours
    validates :manager, exclusion: [nil]
    validates :upper_management, exclusion: [nil]
    validates :username, uniqueness: true
    validates :available_hours, numericality: { only_integer: true }
    validates :password, length: { minimum: 5 }
    
end

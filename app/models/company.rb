class Company < ApplicationRecord
    has_many :projects
    has_many :users 

    accepts_nested_attributes_for :projects, :users
end

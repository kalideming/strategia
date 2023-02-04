class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :photo, :email, :username, :password_digest, :position, :company, :manager, :upper_management, :available_hours, :schedule, :project_roles
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :company_id, :first_name, :last_name, :photo, :email, :username, :password_digest, :position, :manager, :upper_management, :available_hours, :project_roles, :schedule, :events, :projects, :company
end

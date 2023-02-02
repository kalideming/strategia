puts "Clearing Database..."
User.destroy_all
ProjectRole.destroy_all
Project.destroy_all
Task.destroy_all
Schedule.destroy_all
Event.destroy_all
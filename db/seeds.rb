puts "Firebombing Database..."
ProjectRole.destroy_all
Task.destroy_all
Event.destroy_all
Schedule.destroy_all
User.destroy_all
Project.destroy_all
Company.destroy_all

puts "Seeding Companies..."
astruct = Company.create(name: "Astruct")

puts "Seeding Users..."

taylor = User.create(company_id: astruct.id, first_name: "Taylor", last_name: "Hartfield", photo: "https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg", email: "taylor123@gmail.com", username: "bigboss", password: "pw123", position: "Senior Project Manager", manager: false, upper_management: true, available_hours: 40)
jeff = User.create(company_id: astruct.id, first_name: "Jeff", last_name: "Goldblum", photo: "https://pyxis.nymag.com/v1/imgs/c49/fa5/d43db44d60dee75b3ed58a3e57ef29d527-Vulturefest5333-1-copy.rvertical.w570.jpg", email: "jeffybaby@gmail.com", username: "mediumboss", password: "pw123", position: "Senior Project Engineer", manager: true, upper_management: false, available_hours: 40)
alex = User.create(company_id: astruct.id, first_name: "Alex", last_name: "James", photo: "https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1663117457771-R2T2CINZO0WN7HW518BH/headshotsMatter_Headshot_Professional_Dallas_ForthWorth-2.jpg", email: "alex123@gmail.com", username: "alexjamesengineer", password: "pw123", position: "Civil Engineer", manager: false, upper_management: false, available_hours: 40)
sarah = User.create(company_id: astruct.id, first_name: "Sarah", last_name: "Hughes", photo: "https://thelightcommittee.com/wp-content/uploads/2022/09/women-linkedin-headshot-los-angeles.jpg", email: "sarah123@gmail.com", username: "sarahhughesengineer", password: "pw123", position: "Civil Engineer", manager: false, upper_management: false, available_hours: 40)
tyran = User.create(company_id: astruct.id, first_name: "Tyran", last_name: "Nosaurus", photo: "https://media.npr.org/assets/img/2012/05/08/tyrex_custom-27d60a159774218400a8a3bf71af505ead1cc518.jpg", email: "trex123@gmail.com", username: "rexdoescad123", password: "pw123", position: "CAD Analyst", manager: false, upper_management: false, available_hours: 40)
dana = User.create(company_id: astruct.id, first_name: "Dana", last_name: "Lawes", photo: "https://www.seasonmoorephotography.com/wp-content/uploads/2022/07/2022-07-03_0038.jpg", email: "dana123@gmail.com", username: "danalawesengineer", password: "pw123", position: "Site Engineer", manager: false, upper_management: false, available_hours: 20)

puts "Seeding Projects..."

gasline = Project.create(company_id: astruct.id, title: "Gas Line Relocation", description: "Relocate multiple pipelines within the affected area. Project will consist of all activities necessary to complete the demolition, abandonment, construction, and installation of relacted 8-inch & 12-inch high-pressure liquids pipeline segments.", deadline: Date.new(2023, 4, 14), photo: "https://www.entecheng.com/files/Projects/preview/Energy%20Transfer_Web%20PP3.jpg?cachebuster=1675372499984")
highway = Project.create(company_id: astruct.id, title: "Highway Expansion", description: "Reconstruction of a 10-mile stretch of highway, adding one new Express Lane in each direction, removing the aging 57-year-old viaduct, lowering the interstate, and placing a 4-acre park over a portion of the lowered interstate.", deadline: Date.new(2023, 10, 03), photo: "https://adltraffic.co.uk/wp-content/uploads/2020/01/Highway-design-graphic.jpg")
drainage = Project.create(company_id: astruct.id, title: "Drainage Plans", description: "Provide comprehensive stormwater management and reduce chronic street and property flooding while preserving and enhancing wetlands.", deadline: Date.new(2023, 3, 30), photo: "https://champaignil.gov/wp-content/uploads/2016/10/Garden-Hills-Detention-Basin-768x500.jpg")
solar = Project.create(company_id: astruct.id, title: "Solar Project", description: "Provide professional services in support of a large-scale solar project. The proposed construction consists of an 13 MW direct current ground mounted photovoltaic system on an existing 100 acre capped landfill.", deadline: Date.new(2023, 6, 20), photo: "https://i0.wp.com/avilasolar.com/wp-content/uploads/2019/07/chapin-dehydrators-solar-layout.png?fit=1024%2C768&ssl=1")

puts "Seeding Project Roles..."

ProjectRole.create(user_id: taylor.id, project_id: gasline.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user_id: taylor.id, project_id: highway.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user_id: taylor.id, project_id: drainage.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user_id: taylor.id, project_id: solar.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user_id: jeff.id, project_id: gasline.id, role_title: "Senior Project Engineer", project_head: true, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create(user_id: jeff.id, project_id: highway.id, role_title: "Senior Project Engineer", project_head: false, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create(user_id: jeff.id, project_id: drainage.id, role_title: "Senior Project Engineer", project_head: true, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create(user_id: jeff.id, project_id: solar.id, role_title: "Senior Project Engineer", project_head: false, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create!(user_id: alex.id, project_id: gasline.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: alex.id, project_id: highway.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: alex.id, project_id: drainage.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: alex.id, project_id: solar.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: sarah.id, project_id: gasline.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: sarah.id, project_id: highway.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: sarah.id, project_id: drainage.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: sarah.id, project_id: solar.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user_id: tyran.id, project_id: gasline.id, role_title: "CAD Analyst", project_head: false, required_hours: 5, description: "Prepares drawings of complex construction plans.")
ProjectRole.create(user_id: tyran.id, project_id: highway.id, role_title: "CAD Analyst", project_head: false, required_hours: 5, description: "Prepares drawings of complex construction plans.")
ProjectRole.create(user_id: tyran.id, project_id: drainage.id, role_title: "CAD Analyst", project_head: false, required_hours: 5, description: "Prepares drawings of complex construction plans.")
ProjectRole.create(user_id: dana.id, project_id: gasline.id, role_title: "Site Engineer", project_head: false, required_hours: 5, description: "Responsible for planning, marking out and levelling construction sites")
ProjectRole.create(user_id: dana.id, project_id: highway.id, role_title: "Site Engineer", project_head: false, required_hours: 5, description: "Responsible for planning, marking out and levelling construction sites")

puts "Seeding Tasks..."

Task.create(project_id: gasline.id, title: "Pass Gas", description: "Fart gas because gas line relocation means relocating gas from my intestines out into the world", completed: false, deadline: Date.new(2023, 3, 20))
Task.create(project_id: highway.id, title: "Listen to Rascal Flatts", description: "Life is a highway and this is the worst fucking song in the goddamned world", completed: false, deadline: Date.new(2023, 7, 1))
Task.create(project_id: drainage.id, title: "Drain the swamp", description: "jk punch a Republican in the face", completed: true, deadline: Date.new(2023, 3, 2))
Task.create(project_id: solar.id, title: "HARNESS THE POWER OF THE SUN", description: "if u don't ur fired", completed: false, deadline: Date.new(2023, 5, 5))

puts "Seeding Schedules..."

taylorsched = Schedule.create(user_id: taylor.id)
jeffsched = Schedule.create(user_id: jeff.id)
alexsched = Schedule.create(user_id: alex.id)
sarahsched = Schedule.create(user_id: sarah.id)
tyransched = Schedule.create(user_id: tyran.id)
danasched = Schedule.create(user_id: dana.id)

puts "Seeding Events..."
Event.create(schedule_id: taylorsched.id, start: DateTime.new(2023, 2, 20, 8, 0, 0), end: DateTime.new(2023, 2, 20, 11, 0, 0), hours_taken: 2, title: "Meeting w/ Board", description: "Proposal for something fancy I guess idk", personal: false, work: true, project: false)
Event.create(schedule_id: jeffsched.id, start: DateTime.new(2023, 2, 21, 20, 14, 0, 0), end: DateTime.new(2023, 2, 21, 14, 0, 0), hours_taken: 1, title: "Kid's Recital", description: "Violin strings being mutilated in a cacophonous room by sticky kids", personal: true, work: false, project: false)
Event.create(schedule_id: alexsched.id, start: DateTime.new(2023, 2, 22, 10, 30, 0), end: DateTime.new(2023, 2, 22, 12, 30, 0), hours_taken: 2, title: "Review CAD drawings", description: "Look at the drawings and say a lot of serious mhms", personal: false, work: false, project: true)
Event.create(schedule_id: sarahsched.id, start: DateTime.new(2023, 2, 23, 14, 0, 0), end: DateTime.new(2023, 2, 23, 15, 0, 0), hours_taken: 1, title: "Vet appointment", description: "Pup has a v stinky yeast infection in her ear", personal: true, work: false, project: false)
Event.create(schedule_id: tyransched.id, start: DateTime.new(2023, 2, 24, 8, 45, 0), end: DateTime.new(2023, 2, 24, 10, 0, 0), hours_taken: 2, title: "Random Seminar", description: "Seminars seem like a place where dreams go to die", personal: false, work: true, project: false)
Event.create(schedule_id: danasched.id, start: DateTime.new(2023, 2, 20, 15, 0, 0), end: DateTime.new(2023, 2, 20, 16, 0, 0), hours_taken: 1, title: "Doctor Appointment", description: "Checkup at OBGYN", personal: true, work: false, project: false)

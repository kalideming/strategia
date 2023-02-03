puts "Clearing Database..."
User.destroy_all
ProjectRole.destroy_all
Project.destroy_all
Task.destroy_all
Schedule.destroy_all
Event.destroy_all

puts "Creating Users..."

taylor = User.create(first_name: "Taylor", last_name: "Hartfield", photo: "https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg", email: "taylor123@gmail.com", username: "bigboss", password: "pw123", position: "Senior Project Manager", company: "Astruct", manager: false, upper_management: true, available_hours: 40)
jeff = User.create(first_name: "Jeff", last_name: "Goldblum", photo: "https://pyxis.nymag.com/v1/imgs/c49/fa5/d43db44d60dee75b3ed58a3e57ef29d527-Vulturefest5333-1-copy.rvertical.w570.jpg", email: "jeffybaby@gmail.com", username: "mediumboss", password: "pw123", position: "Senior Project Engineer", company: "Astruct", manager: true, upper_management: false, available_hours: 40)
alex = User.create(first_name: "Alex", last_name: "James", photo: "https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1663117457771-R2T2CINZO0WN7HW518BH/headshotsMatter_Headshot_Professional_Dallas_ForthWorth-2.jpg", email: "alex123@gmail.com", username: "alexjamesengineer", password: "pw123", position: "Civil Engineer", company: "Astruct", manager: false, upper_management: false, available_hours: 40)
sarah = User.create(first_name: "Sarah", last_name: "Hughes", photo: "https://thelightcommittee.com/wp-content/uploads/2022/09/women-linkedin-headshot-los-angeles.jpg", email: "sarah123@gmail.com", username: "sarahhughesengineer", password: "pw123", position: "Civil Engineer", company: "Astruct", manager: false, upper_management: false, available_hours: 40)
tyran = User.create(first_name: "Tyran", last_name: "Nosaurus", photo: "https://media.npr.org/assets/img/2012/05/08/tyrex_custom-27d60a159774218400a8a3bf71af505ead1cc518.jpg", email: "trex123@gmail.com", username: "rexdoescad123", password: "pw123", position: "CAD Analyst", company: "Astruct", manager: false, upper_management: false, available_hours: 40)
dana = User.create(first_name: "Dana", last_name: "Lawes", photo: "https://www.seasonmoorephotography.com/wp-content/uploads/2022/07/2022-07-03_0038.jpg", email: "dana123@gmail.com", username: "danalawesengineer", password: "pw123", position: "Site Engineer", company: "Astruct", manager: false, upper_management: false, available_hours: 20)

puts "Creating Projects..."

gasline = Project.create(title: "Gas Line Relocation", description: "Relocate multiple pipelines within the affected area. Project will consist of all activities necessary to complete the demolition, abandonment, construction, and installation of relacted 8-inch & 12-inch high-pressure liquids pipeline segments.", deadline: "2023-04-14", photo: "https://www.entecheng.com/files/Projects/preview/Energy%20Transfer_Web%20PP3.jpg?cachebuster=1675372499984")
highway = Project.create(title: "Highway Expansion", description: "Reconstruction of a 10-mile stretch of highway, adding one new Express Lane in each direction, removing the aging 57-year-old viaduct, lowering the interstate, and placing a 4-acre park over a portion of the lowered interstate.", deadline: "2023-10-03", photo: "https://adltraffic.co.uk/wp-content/uploads/2020/01/Highway-design-graphic.jpg")
drainage = Project.create(title: "Drainage Plans", description: "Provide comprehensive stormwater management and reduce chronic street and property flooding while preserving and enhancing wetlands.", deadline: "2023-03-30", photo: "https://champaignil.gov/wp-content/uploads/2016/10/Garden-Hills-Detention-Basin-768x500.jpg")
solar = Project.create(title: "Solar Project", description: "Provide professional services in support of a large-scale solar project. The proposed construction consists of an 13 MW direct current ground mounted photovoltaic system on an existing 100 acre capped landfill.", deadline: "2023-06-20", photo: "https://i0.wp.com/avilasolar.com/wp-content/uploads/2019/07/chapin-dehydrators-solar-layout.png?fit=1024%2C768&ssl=1")

puts "Creating Project Roles..."

ProjectRole.create(user: taylor.id, project: gasline.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user: taylor.id, project: highway.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user: taylor.id, project: drainage.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user: taylor.id, project: solar.id, role_title: "Senior Project Manager", project_head: true, required_hours: 5, description: "Responsible for planning, directing, managing, and providing oversight to ensure that Astruct goals and objectives are met.")
ProjectRole.create(user: jeff.id, project: gasline.id, role_title: "Senior Project Engineer", project_head: true, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create(user: jeff.id, project: highway.id, role_title: "Senior Project Engineer", project_head: false, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create(user: jeff.id, project: drainage.id, role_title: "Senior Project Engineer", project_head: true, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create(user: jeff.id, project: solar.id, role_title: "Senior Project Engineer", project_head: false, required_hours: 5, description: "Responsible for preparing, coordinating, and monitoring the project, from initial conception to final completion.")
ProjectRole.create(user: alex.id, project: gasline.id, role_title: "Civil Engineer", project_head: false, required_hours: 10, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: alex.id, project: highway.id, role_title: "Civil Engineer", project_head: false, required_hours: 10, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: alex.id, project: drainage.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: alex.id, project: solar.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: sarah.id, project: gasline.id, role_title: "Civil Engineer", project_head: false, required_hours: 10, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: sarah.id, project: highway.id, role_title: "Civil Engineer", project_head: false, required_hours: 10, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: sarah.id, project: drainage.id, role_title: "Civil Engineer", project_head: false, required_hours: 10, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: sarah.id, project: solar.id, role_title: "Civil Engineer", project_head: false, required_hours: 5, description: "Responsible for the conception, design, and construction and maintenance of infrastructure projects and systems.")
ProjectRole.create(user: tyran.id, project: gasline.id, role_title: "CAD Analyst", project_head: false, required_hours: 10, description: "Prepares drawing of complex construction plans.")
ProjectRole.create(user: tyran.id, project: highway.id, role_title: "CAD Analyst", project_head: false, required_hours: 10, description: "Prepares drawing of complex construction plans.")
ProjectRole.create(user: tyran.id, project: drainage.id, role_title: "CAD Analyst", project_head: false, required_hours: 5, description: "Prepares drawing of complex construction plans.")
ProjectRole.create(user: dana.id, project: gasline.id, role_title: "Site Engineer", project_head: false, required_hours: 5, description: "Responsible for planning, marking out and levelling construction sites")
ProjectRole.create(user: dana.id, project: highway.id, role_title: "Site Engineer", project_head: false, required_hours: 5, description: "Responsible for planning, marking out and levelling construction sites")

puts "Creating Tasks..."

Task.create(project: gasline.id, title: "", description: "", completed: , deadline: )
Task.create(project: highway.id, title: "", description: "", completed: , deadline: )
Task.create(project: drainage.id, title: "", description: "", completed: , deadline: )
Task.create(project: solar.id, title: "", description: "", completed: , deadline: )

puts "Creating schedules..."

taylorsched = Schedule.create(user: taylor.id)
jeffsched = Schedule.create(user: jeff.id)
alexsched = Schedule.create(user: alex.id)
sarahsched = Schedule.create(user: sarah.id)
tyransched = Schedule.create(user: tyran.id)
danasched = Schedule.create(user: dana.id)

puts "Creating events..."
Event.create(schedule: taylorsched.id, start: , end: , title: "")
Event.create(schedule: jeffsched.id, start: , end: , title: "")
Event.create(schedule:alexsched.id, start: , end: , title: "")
Event.create(schedule: sarahsched.id, start: , end: , title: "")
Event.create(schedule: tyransched.id, start: , end: , title: "")
Event.create(schedule: danasched.id, start: , end: , title: "")
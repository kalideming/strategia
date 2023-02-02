puts "Clearing Database..."
User.destroy_all
ProjectRole.destroy_all
Project.destroy_all
Task.destroy_all
Schedule.destroy_all
Event.destroy_all

puts "Creating users..."
User.create(first_name: "Taylor", 
            last_name: "Hartfield", 
            photo: "https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg", 
            email: "taylor123@gmail.com", 
            username: "bigboss", 
            password: "pw123", 
            position: "Senior Project Manager", 
            company: "Astruct", 
            manager: false,
            upper_management: true,
            available_hours: 40)

User.create(first_name: "Jeff", 
            last_name: "Goldblum", 
            photo: "https://pyxis.nymag.com/v1/imgs/c49/fa5/d43db44d60dee75b3ed58a3e57ef29d527-Vulturefest5333-1-copy.rvertical.w570.jpg", 
            email: "jeffybaby@gmail.com", 
            username: "mediumboss", 
            password: "pw123",
            position: "Senior Project Engineer", 
            company: "Astruct", 
            manager: true,
            upper_management: false,
            available_hours: 40)

User.create(first_name: "Alex", 
            last_name: "James", 
            photo: "https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1663117457771-R2T2CINZO0WN7HW518BH/headshotsMatter_Headshot_Professional_Dallas_ForthWorth-2.jpg", 
            email: "alex123@gmail.com", 
            username: "alexjamesengineer", 
            password: "pw123",
            position: "Civil Engineer", 
            company: "Astruct", 
            manager: false,
            upper_management: false,
            available_hours: 40)

User.create(first_name: "Sarah", 
            last_name: "Hughes", 
            photo: "https://thelightcommittee.com/wp-content/uploads/2022/09/women-linkedin-headshot-los-angeles.jpg", 
            email: "sarah123@gmail.com", 
            username: "sarahhughesengineer", 
            password: "pw123",
            position: "Civil Engineer", 
            company: "Astruct", 
            manager: false,
            upper_management: false,
            available_hours: 40)

User.create(first_name: "Tyran", 
            last_name: "Nosaurus", 
            photo: "https://media.npr.org/assets/img/2012/05/08/tyrex_custom-27d60a159774218400a8a3bf71af505ead1cc518.jpg", 
            email: "trex123@gmail.com", 
            username: "rexdoescad123", 
            password: "pw123",
            position: "CAD Analyst", 
            company: "Astruct", 
            manager: false,
            upper_management: false,
            available_hours: 40)

User.create(first_name: "Dana", 
            last_name: "Lawes", 
            photo: "https://www.seasonmoorephotography.com/wp-content/uploads/2022/07/2022-07-03_0038.jpg", 
            email: "dana123@gmail.com", 
            username: "danalawesengineer", 
            password: "pw123",
            position: "Site Engineer", 
            company: "Astruct", 
            manager: false,
            upper_management: false,
            available_hours: 20)
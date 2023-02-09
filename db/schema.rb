# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_07_171557) do
  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "schedule_id", null: false
    t.datetime "start"
    t.datetime "end"
    t.integer "hours_taken"
    t.string "title"
    t.string "description"
    t.boolean "personal"
    t.boolean "work"
    t.boolean "project"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["schedule_id"], name: "index_events_on_schedule_id"
  end

  create_table "project_roles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "project_id", null: false
    t.string "role_title"
    t.boolean "project_head"
    t.integer "required_hours"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_roles_on_project_id"
    t.index ["user_id"], name: "index_project_roles_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.integer "company_id"
    t.string "title"
    t.string "description"
    t.date "deadline"
    t.string "photo"
    t.binary "documentation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_projects_on_company_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_schedules_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "project_id", null: false
    t.string "title"
    t.string "description"
    t.boolean "completed"
    t.date "deadline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_tasks_on_project_id"
  end

  create_table "users", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "photo"
    t.string "email"
    t.string "username"
    t.string "password_digest", null: false
    t.string "position"
    t.string "company"
    t.boolean "manager"
    t.boolean "upper_management"
    t.integer "available_hours"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_users_on_company_id"
  end

  add_foreign_key "events", "schedules"
  add_foreign_key "project_roles", "projects"
  add_foreign_key "project_roles", "users"
  add_foreign_key "schedules", "users"
  add_foreign_key "tasks", "projects"
  add_foreign_key "users", "companies"
end

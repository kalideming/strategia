class CreateProjectRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :project_roles do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :project, null: false, foreign_key: true
      t.string :role_title
      t.boolean :project_head
      t.integer :required_hours
      t.string :description

      t.timestamps
    end
  end
end

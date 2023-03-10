class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.belongs_to :company 
      t.string :title
      t.string :description
      t.date :deadline
      t.string :photo
      t.blob :documentation

      t.timestamps
    end
  end
end

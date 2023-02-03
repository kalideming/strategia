class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.belongs_to :schedule, null: false, foreign_key: true
      t.time :start
      t.time :end
      t.integer :hours_taken
      t.string :title
      t.string :description
      t.boolean :personal
      t.boolean :work
      t.boolean :project

      t.timestamps
    end
  end
end

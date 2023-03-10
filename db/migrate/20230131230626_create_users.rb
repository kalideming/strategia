class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.belongs_to :company, null: false, foreign_key: true 
      t.string :first_name
      t.string :last_name
      t.string :photo
      t.string :email
      t.string :username
      t.string :password_digest, null: false
      t.string :position
      t.string :company
      t.boolean :manager
      t.boolean :upper_management
      t.integer :available_hours

      t.timestamps
    end
  end
end

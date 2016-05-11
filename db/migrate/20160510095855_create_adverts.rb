class CreateAdverts < ActiveRecord::Migration[5.0]
  def change
    create_table :adverts do |t|
      t.string :title
      t.text :message

      t.timestamps
    end
  end
end

class Hotel < ApplicationRecord
  has_many :rooms
  has_many :users, through: :rooms

  def restant_capacity
    capacity - users.count
  end

  def capacity
    rooms.sum(:capacity)
  end

end

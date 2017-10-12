require 'csv'
file = File.read("#{Rails.root}/lib/seeds/users.csv")
users = CSV.parse(file)

users.each do |row|
  u = User.where(email: row[0]).first
  u.update(certificate: "NÃO") unless u.nil?
end

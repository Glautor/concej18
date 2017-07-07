Admin.create(email: 'egej@admin.com', password: 'egej@159')

lot1 = Lot.new do |lot|
  lot.name = "Primeiro lote"
  lot.number = 1
  lot.limit = 1000
  lot.start_date = DateTime.new(2017, 7, 5, 01, 0, 0 , '-3')
  lot.end_date = DateTime.new(2017, 7, 17, 23, 59, 59 , '-3')
  lot.value_federated = 210
  lot.value_not_federated = 240
end
lot1.save!

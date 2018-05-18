Admin.create(email: 'concej@admin.com', password: 'concej@159')

#Lote promocional
lot0 = Lot.new do |lot|
  lot.name = "Lote promocional"
  lot.number = 0
  lot.limit = 34
  lot.start_date = DateTime.new(2018, 3, 12, 20, 50, 50 , '-3')
  lot.end_date = DateTime.new(2018, 3, 16, 23, 59, 59 , '-3')
  lot.value_federated = 270
  lot.value_not_federated = 270
end
lot0.save!

#Primeiro lote
lot1 = Lot.new do |lot|
  lot.name = "Primeiro lote"
  lot.number = 1
  lot.limit = 10
  lot.start_date = DateTime.new(2018, 3, 26, 21, 59, 59 , '-3')
  lot.end_date = DateTime.new(2018, 4, 06, 23, 59, 59 , '-3')
  lot.value_federated = 370
  lot.value_not_federated = 385
end
lot1.save!

#Segundo lote
lot2 = Lot.new do |lot|
  lot.name = "Segundo lote"
  lot.number = 2
  lot.limit = 10
  lot.start_date = DateTime.new(2018, 4, 16, 21, 59, 59 , '-3')
  lot.end_date = DateTime.new(2018, 4, 30, 23, 59, 59 , '-3')
  lot.value_federated = 380
  lot.value_not_federated = 395
end
lot2.save!

#Terceiro lote
lot3 = Lot.new do |lot|
  lot.name = "Terceiro lote"
  lot.number = 3
  lot.limit = 10
  lot.start_date = DateTime.new(2018, 5, 07, 21, 59, 59 , '-3')
  lot.end_date = DateTime.new(2018, 5, 18, 23, 59, 59 , '-3')
  lot.value_federated = 390
  lot.value_not_federated = 405
end
lot3.save!




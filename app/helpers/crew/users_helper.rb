module Crew::UsersHelper
  def count_paymeny_ej(usuarios)
    usuarios.select{ |user| !user.payment.nil? && user.payment.portion_paid > 0}.count
  end

  def count_alocados(usuarios)
    usuarios.select { |user| user.lot_id.is_a? Integer }.count
  end

  def count_fila(usuarios)
    usuarios.select { |user| user.active == true && user.completed == true && user.lot_id == nil }.count
  end

  def count_pagototal(usuarios)
    usuarios.select{ |user| !user.payment.nil? && user.payment.portions == user.payment.portion_paid }.count
  end

  def count_pagoparcial(usuarios)
    usuarios.select{ |user| !user.payment.nil? && user.payment.portion_paid > 0 && user.payment.portion_paid != user.payment.portions }.count
  end

end

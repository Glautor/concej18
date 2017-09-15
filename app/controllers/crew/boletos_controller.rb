class Crew::BoletosController < Crew::BaseController
  def index

    @boletos = Payment.where(method: "Boleto")
    # @boletos.each do |b|
    #   total_pago = b.asaas_payments.where(status: 'RECEIVED').count
    #   if total_pago != b.portion_paid
    #     p 'DIFERENTE'
    #     #b.update(portion_paid: total_pago)
    #   end
    # end
  end

  def relatorio
    @boletos = AsaasPayment.days
    @pagseguro = Payment.includes(:user).where(method: 'PagSeguro').where.not(users: {paid_on: nil}).group_by{|d| d.user.paid_on.to_date}.sort_by{|s| s}.reverse
  end
end

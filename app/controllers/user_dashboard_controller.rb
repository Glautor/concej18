class UserDashboardController < BaseController
  before_action :get_user
  before_action :verify_register_conclusion, :except=>[:about]

  def index
    @days = Event.join_events_by_time
    @payment = @user.payment
    if !@payment.nil?
      case @user.payment.method
      when "PagSeguro"
        @method_message = "entrar novamente no PagSeguro."
      when "Boleto"
        @method_message = "receber um novo email com os boletos"
        @billets_links = AsaasPayment.where(custumer_id: @payment.user_asaas_id).order("description")
      when "Dinheiro"
        @method_message = "rever os dados da conta"
      end
    end

    if @user.federation_check=='Sim'
      @federado = 'FEDERADA'
    elsif @user.federation_check=='Não'
      @federado = 'NÃO FEDERADA'
    else
      @federado = @user.federation_check.mb_chars.upcase
    end

  end

  def about
  end

end

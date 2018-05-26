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


  def user_must_have_changed_ej
    if @user.junior_enterprise == "Nome da EJ"
      redirect_to authenticated_user_root_path
      flash[:alert] = "Cadastre o nome da sua EJ conforme o aviso na tela inicial especifica"
    end
  end

    if @user.federation_check=='Sim'
      @federado = 'FEDERADA'
    elsif @user.federation_check=='Não'
      @federado = 'NÃO FEDERADA'
    else
      @federado = @user.federation_check.mb_chars.upcase
    end

    if params[:top5].nil? && session[:top5].nil?
      params_or_session = "switchfalse"
    elsif params[:top5].nil? && !session[:top5].nil?
      params_or_session = (session[:top5] ? "switchtrue" : "switchfalse")
    else
      params_or_session = params[:top5]
    end

     #switch
    if params_or_session == "switchtrue" ##PAGANTES
      @top5_value = true
      session[:top5] = true
      @ej = User.includes(:payment).where.not(payments: {id: nil}).where.not(junior_enterprise:nil).order(:junior_enterprise).group_by{|d| [d.junior_enterprise.split(' ').first.downcase, d.payment.portion_paid > 0 ] }.sort_by { |k, v| v.count }.reverse.take(5)
    elsif params_or_session == "switchfalse" ##CADASTRADOS
      @top5_value = false
      session[:top5] = false
      @ej = User.includes(:payment).all.where.not(junior_enterprise:nil).order(:junior_enterprise).group_by{|d| d.junior_enterprise.split(' ').first.downcase}.sort_by { |k, v| v.count }.reverse.take(5)
    else
      @ej = User.includes(:payment).all.where.not(junior_enterprise:nil).order(:junior_enterprise).group_by{|d| d.junior_enterprise.split(' ').first.downcase}.sort_by { |k, v| v.count }.reverse.take(5)
    end

    @top5_value = session[:top5] unless session[:top5].nil?
  end

  def about
  end

  def active_account
    if !@user.active
      @lot = Lot.active_lot
      if !@lot.nil? && !@lot.is_full? && @user.lot.nil?
        @user.lot = @lot
      end
      @user.active = true
      @user.created_at = Time.now
      @user.save!
      redirect_to authenticated_user_root_path
    end
  end

end

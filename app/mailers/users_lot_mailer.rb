class UsersLotMailer < ApplicationMailer
  def send_antecipated_lot(user, lot)
    @user = user
    @lot = lot
    mail to: user.email, subject: "CONCEJ 2018 - Link de cadastro antecipado no #{lot.name}"
  end

  def bus(user)
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - TRIPULAÇÃO, IÇAR ÂNCORAS!"
  end

  def finalizar(user)
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - Finalize o seu cadastro."
  end

  def escolha_p(user)
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - Somente HOJE, 19h! Escolha da programação"
  end

  def escolha_q(user)
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - Escolha seu quarto às 22hrs! (HOJE)"
  end

  def certificate(user)
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - Certificado Liberado"
  end

  def alert_certificate(user)
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - Atenção Soldados do CONCEJ 18!"
  end

  
  def event(user)
    @days = Event.join_events_by_time
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - Confira sua programação."
  end

  def destroy_account(user)
    @user = user
    mail to: user.email, subject: "[CONCEJ 2018] - Você perdeu sua vaga :/"
  end

  def allocated_on_third_lot(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Você entrou para o #{lot.name}!"
  end

  def allocated(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Você está no lote #{user.lot.number}"
  end

  def not_allocated(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Fique atento a lista de espera!"
  end

  def choose_payment(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Você pode nos dar uma mãozinha?"
  end
  
  #UsersLotMailer.special_needs(user).deliver_now
  def special_needs(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Melhor Experiência"
  end

  #patrick
  def remember_payment(user)
    @user = user
    unless @user.name.nil?
      mail to: user.email, subject: "[CONCEJ 2018] Último dia! Não esqueça o pagamento!"
    else
      mail to: user.email, subject: "[CONCEJ 2018] Último dia! Não esqueça o pagamento!"
    end
  end

  #patrick #heroku run rake email_payment:lembrar_inscricao
  def lembrar_inscricao(user)
    @user = user
    mail to: user.email, subject: "Garanta sua vaga no CONCEJ 2018!"
  end

  def waiting_list_into_lot_2(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Sempre há uma segunda chance!"
  end

  def remember_lot_3_payment(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Não esqueça o pagamento"
  end

  def remember_payment_2(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Não esqueça do pagamento"
  end

  def remember_payment_4(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Não esqueça do pagamento"
  end

  def remember_payment_5(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Não esqueça do pagamento!"
  end

  def calma_navegantes(user)
    @user = user
    mail to: user.email, subject: "CONCEJ 2018 - Calma, navegantes!"
  end
end

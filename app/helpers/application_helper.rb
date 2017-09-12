module ApplicationHelper
  def vencimento_boletos
    config = YAML.load_file("#{Rails.root.to_s}/config/asaas.yml")
    config['vencimentos']
  end

  #CRACHA
  def all_events_by_user(user)
    if user.events.blank?
      "[PROG. ÑÃO SELEC.]"
    else
      user.events.map{ |h| "#{h.id}TA" }
    end
  end
end

class Crew::BoletosController < Crew::BaseController
  def index
  	@boletos = Payment.where(method: "Boleto")
  end
end

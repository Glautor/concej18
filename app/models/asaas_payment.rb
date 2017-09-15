class AsaasPayment < ApplicationRecord
  has_one :payment, foreign_key: 'user_asaas_id',  primary_key: 'custumer_id'
  after_destroy :remove_asaas_billets

  def set_all_status(user_id,status)
    self.where(user_id:user_id).update_attribute :status, status
  end

  def remove_asaas_billets
    begin
      Asaas::Payments.Remove(self.payment_asaas_id) if !self.payment_asaas_id.nil?
    rescue => ex
      p ex
    end
  end

  def self.days
    self.includes(payment: [:user]).all.where.not(client_payment_date:nil).group_by{|d| d.client_payment_date.to_date}.sort_by{|s| s}.reverse
  end
end

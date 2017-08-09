module Asaas
  class Notifications
    def self.ShowOverdue(id)
      noty = APIRequest.request("GET", "#{Asaas.base_uri}/customers/#{id}/notifications")
      noty = noty['data']
      noty.find_all{|k,v| k['event'] == "PAYMENT_OVERDUE"}
    end

    def self.Disabled(id_not)
      values =     {
        "enabled": true,
        "emailEnabledForProvider": false,
        "smsEnabledForProvider": false,
        "emailEnabledForCustomer": false,
        "smsEnabledForCustomer": false,
      }
      APIRequest.request("POST", "#{Asaas.base_uri}/notifications/#{id_not}", values)
    end
  end
end

class ApplicationMailer < ActionMailer::Base
  include SendGrid if Rails.env.production?
  default :from => %{"EGEJ 17" <coord.admfin@fejers.org.br>}
  layout 'mailer'
end


class ApplicationMailer < ActionMailer::Base
  include SendGrid if Rails.env.production?
  default :from => %{"EGEJ 18" <experiencia@fejers.org.br>}
  layout 'mailer'
end


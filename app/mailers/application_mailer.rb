class ApplicationMailer < ActionMailer::Base
  include SendGrid if Rails.env.production?
  default :from => %{"CONCEJ 18" <comunicacao.concej18@gmail.com>}
  layout 'mailer'
end


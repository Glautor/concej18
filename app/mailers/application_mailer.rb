class ApplicationMailer < ActionMailer::Base
  include SendGrid if Rails.env.production?
  default :from => %{"EGEJ 18" <marcelfonteles@gmail.com>}
  layout 'mailer'
end


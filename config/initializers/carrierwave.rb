CarrierWave.configure do |config|
  config.fog_credentials = {
    provider:              'Google',                        # required
    aws_access_key_id:     Rails.application.secrets.access_key_id,            # required
    aws_secret_access_key: Rails.application.secrets.secret_access_key,            # required
  }
  config.fog_directory  = 'egej18'                          # required
  config.fog_public     = true                                        # optional, defaults to true
  config.fog_attributes = { 'Cache-Control' => "max-age=#{365.day.to_i}" } # optional, defaults to {}
end

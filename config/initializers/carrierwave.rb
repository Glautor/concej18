CarrierWave.configure do |config|
  config.fog_provider = 'fog/google'
  config.fog_credentials = {
    provider:              'Google',                        # required
    aws_access_key_id:     Rails.application.secrets.google_storage_access_key_id,            # required
    aws_secret_access_key: Rails.application.secrets.google_storage_secret_access_key,            # required
  }
  config.fog_directory  = 'egej18'                          # required
end

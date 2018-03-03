require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EgejNovo
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.time_zone = 'America/Fortaleza'

    config.i18n.default_locale = :'pt-BR'

    config.assets.initialize_on_precompile = false

    config.autoload_paths += %W(#{config.root}/lib)
    config.autoload_paths += Dir["#{config.root}/lib/**/"]
    config.eager_load = true
    Dir[File.join(Rails.root, "lib", "core_ext", "*.rb")].each {|l| require l }
    Dir[File.join(Rails.root, "lib", "classes",  "*.rb")].each {|l| require l } 
    require "#{Rails.root}/lib/asaas/asaas.rb"

    if Rails.env.development? || Rails.env.test?
      Asaas.api_key = 'd67aa48355a6e1f7dc4bf5f3fd5968c1726cc83419a1f6fdfb4c28dd7494a425'
    else
      Asaas.api_key = ENV['ASAAS_KEY']
    end
    config.middleware.use Rack::Cors do
      allow do
        origins '*'
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
  end
end

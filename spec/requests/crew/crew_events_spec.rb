require 'rails_helper'

RSpec.describe "Crew::Events", type: :request do
  describe "GET /crew_events" do
    it "works! (now write some real specs)" do
      get crew_events_path
      expect(response).to have_http_status(200)
    end
  end
end

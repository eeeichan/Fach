require 'test_helper'

class PlaiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get plaies_index_url
    assert_response :success
  end

end

$(document).ready ->
  $('body').prepend('<div id="fb-root"></div>')

  $.ajax
    url: "#{window.location.protocol}//connect.facebook.net/en_US/all.js"
    dataType: 'script'
    cache: true


window.fbAsyncInit = ->
  FB.init(appId: '340337046468098', cookie: true)

  $('#sign_in').click (e) ->
    e.preventDefault()
    FB.login ((response) ->
      window.location = '/users/auth/facebook?auth_type=rerequest&scope=email' if response.authResponse
    ), scope: 'public_profile,email'

  $('#sign_out').click (e) ->
    FB.getLoginStatus (response) ->
      FB.logout() if response.authResponse
    true